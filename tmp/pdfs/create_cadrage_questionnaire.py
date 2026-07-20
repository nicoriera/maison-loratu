from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageTemplate,
    Paragraph,
    PageBreak,
    Spacer,
    Table,
    TableStyle,
)


OUTPUT = "output/pdf/maison-loratu-questionnaire-cadrage.pdf"

TERRACOTTA = colors.HexColor("#C16A46")
GREEN = colors.HexColor("#315D53")
CREAM = colors.HexColor("#F8F3EA")
SAND = colors.HexColor("#E8D6C5")
INK = colors.HexColor("#27332F")
MUTED = colors.HexColor("#66736D")


class CadrageDocument(BaseDocTemplate):
    def __init__(self, filename):
        super().__init__(filename, pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm,
                         topMargin=20 * mm, bottomMargin=18 * mm)
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height,
                      id="normal", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
        self.addPageTemplates([PageTemplate(id="main", frames=[frame], onPage=draw_page)])


def draw_page(canvas, document):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(colors.white)
    canvas.rect(0, 0, width, height, stroke=0, fill=1)
    canvas.setFillColor(CREAM)
    canvas.rect(0, height - 7 * mm, width, 7 * mm, stroke=0, fill=1)
    canvas.setFillColor(GREEN)
    canvas.circle(width - 19 * mm, height - 3.5 * mm, 1.5 * mm, stroke=0, fill=1)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 9 * mm, "Maison Loratu - Document de cadrage")
    canvas.drawRightString(width - 18 * mm, 9 * mm, f"{document.page}")
    canvas.restoreState()


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CoverTitle", parent=styles["Title"], fontName="Helvetica-Bold",
                          fontSize=30, leading=34, textColor=GREEN, alignment=TA_LEFT, spaceAfter=8))
styles.add(ParagraphStyle(name="CoverSubtitle", parent=styles["Normal"], fontName="Helvetica",
                          fontSize=15, leading=21, textColor=INK, spaceAfter=18))
styles.add(ParagraphStyle(name="Section", parent=styles["Heading1"], fontName="Helvetica-Bold",
                          fontSize=19, leading=23, textColor=GREEN, spaceBefore=4, spaceAfter=12))
styles.add(ParagraphStyle(name="Question", parent=styles["Heading2"], fontName="Helvetica-Bold",
                          fontSize=11.5, leading=15, textColor=INK, spaceBefore=9, spaceAfter=4))
styles.add(ParagraphStyle(name="Body", parent=styles["BodyText"], fontName="Helvetica",
                          fontSize=10, leading=15, textColor=INK, spaceAfter=7))
styles.add(ParagraphStyle(name="Small", parent=styles["BodyText"], fontName="Helvetica",
                          fontSize=8.5, leading=12, textColor=MUTED, spaceAfter=5))
styles.add(ParagraphStyle(name="Callout", parent=styles["BodyText"], fontName="Helvetica-Bold",
                          fontSize=11, leading=15, textColor=GREEN, spaceAfter=4))


def p(text, style="Body"):
    return Paragraph(text, styles[style])


def answer_lines(count=3):
    rows = [[" "] for _ in range(count)]
    table = Table(rows, colWidths=[174 * mm], rowHeights=[7 * mm] * count)
    table.setStyle(TableStyle([
        ("LINEBELOW", (0, 0), (-1, -1), 0.45, SAND),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ]))
    return table


def choice_row(items):
    cells = [f"[ ]  {item}" for item in items]
    table = Table([cells], colWidths=[174 * mm / len(cells)] * len(cells))
    table.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, -1), "Helvetica"),
        ("FONTSIZE", (0, 0), (-1, -1), 9.5),
        ("TEXTCOLOR", (0, 0), (-1, -1), INK),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return table


def question(text, choices=None, lines=3):
    flow = [p(text, "Question")]
    if choices:
        flow.append(choice_row(choices))
    flow.append(answer_lines(lines))
    flow.append(Spacer(1, 3 * mm))
    return KeepTogether(flow)


story = []

story.extend([
    Spacer(1, 24 * mm),
    p("Maison Loratu", "CoverTitle"),
    p("Questionnaire de cadrage du futur site", "CoverSubtitle"),
    Spacer(1, 8 * mm),
    p("Ce document aide Sandra à préciser le projet avant toute conception graphique ou développement.", "Body"),
    Spacer(1, 6 * mm),
    Table([[p("À remplir tranquillement", "Callout")]], colWidths=[174 * mm], style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.white),
        ("BOX", (0, 0), (-1, -1), 0.6, SAND),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
    ])),
    Spacer(1, 13 * mm),
    p("Nom : ........................................................................................................", "Body"),
    p("Date : ........................................................................................................", "Body"),
    Spacer(1, 11 * mm),
    p("Les réponses peuvent être courtes. Il n'est pas nécessaire d'avoir déjà les textes, les tarifs ou les noms définitifs des offres.", "Small"),
    PageBreak(),
])

story.extend([
    p("1. Identité et intention", "Section"),
    p("Cette première partie sert à faire émerger la personnalité de Maison Loratu et la promesse du site.", "Body"),
    question("En une phrase, qu'aimerais-tu que les visiteurs comprennent de Maison Loratu ?", lines=4),
    question("Quels mots doivent absolument être associés à Maison Loratu ?", lines=3),
    question("Quels mots, images ou promesses veux-tu éviter ?", lines=3),
    question("Pourquoi as-tu choisi le nom Maison Loratu ? Que doit-il évoquer ?", lines=3),
    question("Quelle place veux-tu donner à ta personnalité sur le site ?", ["Très personnelle", "Équilibrée", "Plutôt institutionnelle"], lines=2),
    PageBreak(),
])

story.extend([
    p("2. Publics et besoins", "Section"),
    p("Les publics déjà identifiés sont les enfants, les seniors, les familles, les écoles, les centres de loisirs et les associations.", "Body"),
    question("Classe les publics par ordre de priorité pour le lancement.", lines=5),
    question("Pour les enfants, quels âges veux-tu accompagner ?", lines=2),
    question("Quels besoins souhaites-tu traiter chez les enfants ?", ["Émotions", "Confiance", "Concentration", "Sommeil", "Autre"], lines=2),
    question("Quels besoins souhaites-tu traiter chez les seniors ?", ["Stress", "Sommeil", "Mobilité douce", "Isolement", "Autre"], lines=2),
    question("Pour les familles, quels types de situations veux-tu accompagner ?", lines=3),
    question("Souhaites-tu conserver un accompagnement autour de la grossesse ?", ["Oui, prioritaire", "Oui, secondaire", "Non", "À décider"], lines=2),
    PageBreak(),
])

story.extend([
    p("3. Ateliers et interventions", "Section"),
    p("Les ateliers sont une offre importante de Maison Loratu. Cette partie permet de préciser les formats à présenter aux structures.", "Body"),
    question("Quels ateliers souhaites-tu proposer au lancement ?", ["Enfants", "Seniors", "Familles", "Écoles", "Associations"], lines=3),
    question("Quels objectifs peuvent avoir les ateliers ?", ["Retour au calme", "Émotions", "Respiration", "Concentration", "Confiance", "Autre"], lines=2),
    question("Quels formats veux-tu proposer ?", ["Atelier ponctuel", "Cycle", "Événement", "Conférence", "À définir"], lines=2),
    question("Quelle durée imagines-tu pour un atelier ?", ["30 min", "45 min", "1 h", "1 h 30", "Variable"], lines=2),
    question("Quel nombre de participants peux-tu accompagner ?", lines=2),
    question("Les interventions ont-elles lieu chez Maison Loratu, sur place, ou les deux ?", ["Chez le client", "Chez Maison Loratu", "Les deux"], lines=2),
    question("Les structures doivent-elles demander un devis pour chaque intervention ?", ["Oui", "Non, tarifs affichés", "Selon le format"], lines=2),
    PageBreak(),
])

story.extend([
    p("4. Parcours et fonctionnement", "Section"),
    p("Ces réponses permettront de concevoir une navigation simple et des formulaires adaptés aux particuliers comme aux structures.", "Body"),
    question("Quelle action doit être la plus visible sur le site ?", ["Prendre rendez-vous", "Appeler", "Écrire", "Demander un devis"], lines=2),
    question("Souhaites-tu proposer une première prise de contact gratuite ?", ["Oui, appel", "Oui, séance découverte", "Non", "À décider"], lines=2),
    question("Comment veux-tu gérer les rendez-vous ?", ["Téléphone", "Calendrier en ligne", "Email", "Plusieurs options"], lines=2),
    question("Quelles informations pratiques sont déjà définies ?", lines=3),
    question("Quels éléments peuvent rassurer un nouveau visiteur ?", ["Diplômes", "Expérience", "Avis", "Photos", "Déontologie", "Autre"], lines=2),
    question("As-tu déjà des témoignages ou retours de participants utilisables sur le site ?", ["Oui", "Non", "À recueillir"], lines=2),
    PageBreak(),
])

story.extend([
    p("5. Univers illustré", "Section"),
    p("La référence du Bercail indique une préférence pour un site vivant, illustré, chaleureux et mémorable. L'objectif est de créer un univers propre à Maison Loratu.", "Body"),
    question("Qu'est-ce qui te plaît le plus dans le site du Bercail ?", lines=3),
    question("Quel niveau d'illustration souhaites-tu ?", ["Quelques illustrations", "Illustrations très présentes", "Illustrations + photos", "Principalement illustré"], lines=2),
    question("Quelles ambiances correspondent le mieux à Maison Loratu ?", ["Nature", "Cocon", "Famille", "Joie", "Sérénité", "Autre"], lines=2),
    question("Y a-t-il des couleurs que tu aimes particulièrement ?", lines=2),
    question("Y a-t-il des couleurs ou styles que tu ne veux pas ?", lines=2),
    question("Quels personnages ou scènes aimerais-tu voir illustrés ?", lines=3),
    question("Souhaites-tu utiliser des photos de toi, des lieux ou des ateliers ?", ["Oui", "Non", "À décider"], lines=2),
    PageBreak(),
])

story.extend([
    p("6. Synthèse et prochaines décisions", "Section"),
    p("Cette page peut être complétée après lecture du document.", "Body"),
    question("Les trois offres les plus importantes à présenter sont :", lines=4),
    question("Les trois publics prioritaires sont :", lines=3),
    question("L'action principale attendue d'un visiteur est :", lines=2),
    question("La phrase qui résume le mieux Maison Loratu est :", lines=4),
    question("Autres remarques, idées ou envies pour le futur site :", lines=5),
    Spacer(1, 6 * mm),
    p("Merci. Ces réponses serviront à préparer les personas, les offres, l'arborescence et le cahier des charges fonctionnel.", "Callout"),
])


document = CadrageDocument(OUTPUT)
document.build(story)
print(OUTPUT)
