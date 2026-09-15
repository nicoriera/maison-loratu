from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white
from reportlab.lib.utils import ImageReader
from reportlab.graphics.barcode import qr
from reportlab.graphics.shapes import Drawing
from reportlab.graphics import renderPDF
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "output" / "pdf"
OUT.mkdir(parents=True, exist_ok=True)

W, H = 91 * mm, 61 * mm          # 85 x 55 mm + 3 mm bleed on each edge
BLEED = 3 * mm
TW, TH = 85 * mm, 55 * mm

CREAM = HexColor("#FEFCF9")
WARM = HexColor("#FBF3E7")
TERRA = HexColor("#B85A36")
DEEP = HexColor("#5D2A1C")
SAGE = HexColor("#E7EBDD")
SAGE_DEEP = HexColor("#53614B")
INK = HexColor("#322721")
MUTED = HexColor("#6F625B")

PHONE = "06 66 88 33 02"
EMAIL = "maisonloratu@gmail.com"
WEB = "maisonloratu.com"
INSTA = "@maison__loratu"


def set_fill(c, color):
    c.setFillColor(color)


def text(c, x, y, value, font="Helvetica", size=8, color=INK, tracking=None):
    c.saveState()
    set_fill(c, color)
    if tracking is None:
        c.setFont(font, size)
        c.drawString(x, y, value)
    else:
        obj = c.beginText(x, y)
        obj.setFont(font, size)
        obj.setCharSpace(tracking)
        obj.textLine(value)
        c.drawText(obj)
    c.restoreState()


def centered(c, y, value, font="Helvetica", size=8, color=INK, x=W/2):
    c.saveState()
    set_fill(c, color)
    c.setFont(font, size)
    c.drawCentredString(x, y, value)
    c.restoreState()


def house_mark(c, x, y, size, color):
    c.saveState()
    c.setStrokeColor(color)
    c.setLineWidth(max(.6, size * .07))
    c.setLineCap(1)
    c.setLineJoin(1)
    c.line(x, y + size * .42, x + size * .5, y + size)
    c.line(x + size * .5, y + size, x + size, y + size * .42)
    c.line(x + size * .15, y + size * .53, x + size * .15, y)
    c.line(x + size * .15, y, x + size * .85, y)
    c.line(x + size * .85, y, x + size * .85, y + size * .53)
    c.restoreState()


def qr_code(c, x, y, size, url=WEB):
    widget = qr.QrCodeWidget("https://" + url)
    x1, y1, x2, y2 = widget.getBounds()
    drawing = Drawing(size, size, transform=[size/(x2-x1), 0, 0, size/(y2-y1), 0, 0])
    drawing.add(widget)
    renderPDF.draw(drawing, c, x, y)


def draw_cover_v1(c):
    set_fill(c, WARM); c.rect(0, 0, W, H, fill=1, stroke=0)
    set_fill(c, SAGE); c.circle(W - 3*mm, H - 5*mm, 23*mm, fill=1, stroke=0)
    set_fill(c, HexColor("#F0D0C0")); c.circle(4*mm, 2*mm, 18*mm, fill=1, stroke=0)
    house_mark(c, W/2-5*mm, H-20*mm, 10*mm, TERRA)
    centered(c, H-30*mm, "Maison Loratu", "Times-Roman", 19, DEEP)
    centered(c, H-37*mm, "SOPHROLOGIE", "Helvetica-Bold", 6.5, TERRA)
    centered(c, H-46*mm, "Respirer  •  S'apaiser  •  Fleurir", "Times-Italic", 8.5, DEEP)


def draw_back_v1(c):
    set_fill(c, CREAM); c.rect(0, 0, W, H, fill=1, stroke=0)
    x = BLEED + 8*mm
    text(c, x, H-15*mm, "Sandra", "Times-Roman", 17, DEEP)
    text(c, x, H-21*mm, "SOPHROLOGUE CERTIFIÉE", "Helvetica-Bold", 6.3, TERRA, .5)
    c.setStrokeColor(HexColor("#D4C0A8")); c.setLineWidth(.6)
    c.line(x, H-25*mm, W-BLEED-8*mm, H-25*mm)
    text(c, x, H-31*mm, PHONE, "Helvetica", 7.2, INK)
    text(c, x, H-36*mm, EMAIL, "Helvetica", 7.2, INK)
    text(c, x, H-41*mm, WEB, "Helvetica-Bold", 7.2, DEEP)
    text(c, x, H-46*mm, "Anglet • Bayonne • Biarritz", "Helvetica", 6.8, MUTED)
    qr_code(c, W-BLEED-20*mm, BLEED+8*mm, 13*mm)


def draw_cover_v2(c):
    set_fill(c, DEEP); c.rect(0, 0, W, H, fill=1, stroke=0)
    set_fill(c, TERRA); c.circle(W+5*mm, H/2, 29*mm, fill=1, stroke=0)
    house_mark(c, BLEED+9*mm, H-18*mm, 8*mm, CREAM)
    text(c, BLEED+9*mm, H-29*mm, "Maison", "Times-Roman", 20, CREAM)
    text(c, BLEED+9*mm, H-37*mm, "Loratu", "Times-Roman", 20, CREAM)
    text(c, BLEED+9*mm, H-46*mm, "SOPHROLOGIE À ANGLET", "Helvetica-Bold", 6.5, HexColor("#F0D0C0"), .45)
    text(c, W-28*mm, BLEED+9*mm, "loratu", "Times-Italic", 9, white)
    text(c, W-28*mm, BLEED+5*mm, "fleurir, en basque", "Helvetica", 5.5, white)


def draw_back_v2(c):
    set_fill(c, TERRA); c.rect(0, 0, W, H, fill=1, stroke=0)
    x = BLEED+9*mm
    text(c, x, H-15*mm, "Sandra", "Times-Roman", 18, white)
    text(c, x, H-21*mm, "Sophrologue certifiée", "Helvetica-Bold", 7, white)
    text(c, x, H-31*mm, PHONE, "Helvetica", 7.4, white)
    text(c, x, H-36*mm, EMAIL, "Helvetica", 7.4, white)
    text(c, x, H-41*mm, WEB, "Helvetica-Bold", 7.4, white)
    text(c, x, H-47*mm, INSTA, "Helvetica", 6.8, HexColor("#F8E8E0"))
    set_fill(c, CREAM); c.roundRect(W-BLEED-24*mm, BLEED+8*mm, 17*mm, 17*mm, 2*mm, fill=1, stroke=0)
    qr_code(c, W-BLEED-22.5*mm, BLEED+9.5*mm, 14*mm)


def cover_photo(c, path, x, y, w, h):
    img = Image.open(path)
    iw, ih = img.size
    target = w/h
    current = iw/ih
    if current > target:
        new_w = int(ih*target); left=(iw-new_w)//2; box=(left,0,left+new_w,ih)
    else:
        new_h = int(iw/target); top=(ih-new_h)//2; box=(0,top,iw,top+new_h)
    cropped = img.crop(box)
    tmp = ROOT / "tmp" / "pdfs" / "card_photo_crop.jpg"
    cropped.convert("RGB").save(tmp, quality=94)
    c.drawImage(ImageReader(str(tmp)), x, y, w, h, mask='auto')


def draw_cover_v3(c):
    set_fill(c, SAGE); c.rect(0, 0, W, H, fill=1, stroke=0)
    cover_photo(c, ROOT/"public/images/sandra-portrait.webp", W*.46, 0, W*.54, H)
    set_fill(c, SAGE); c.roundRect(BLEED+6*mm, BLEED+7*mm, 39*mm, TH-14*mm, 4*mm, fill=1, stroke=0)
    house_mark(c, BLEED+10*mm, H-18*mm, 7*mm, SAGE_DEEP)
    text(c, BLEED+10*mm, H-27*mm, "Maison Loratu", "Times-Roman", 15, DEEP)
    text(c, BLEED+10*mm, H-34*mm, "Sandra", "Times-Italic", 10, SAGE_DEEP)
    text(c, BLEED+10*mm, H-40*mm, "Sophrologue certifiée", "Helvetica-Bold", 6.5, SAGE_DEEP)


def draw_back_v3(c):
    set_fill(c, SAGE); c.rect(0, 0, W, H, fill=1, stroke=0)
    set_fill(c, CREAM); c.roundRect(BLEED+5*mm, BLEED+5*mm, TW-10*mm, TH-10*mm, 5*mm, fill=1, stroke=0)
    x=BLEED+11*mm
    text(c, x, H-16*mm, "Un moment pour soi,", "Times-Roman", 13, DEEP)
    text(c, x, H-22*mm, "à son rythme.", "Times-Italic", 13, TERRA)
    text(c, x, H-31*mm, PHONE, "Helvetica", 7.1, INK)
    text(c, x, H-36*mm, EMAIL, "Helvetica", 7.1, INK)
    text(c, x, H-41*mm, WEB, "Helvetica-Bold", 7.1, DEEP)
    text(c, x, H-46*mm, "ANGLET & BAB", "Helvetica-Bold", 6, SAGE_DEEP, .45)
    qr_code(c, W-BLEED-21*mm, BLEED+10*mm, 13*mm)


VERSIONS = [
    ("01-editoriale-creme", draw_cover_v1, draw_back_v1),
    ("02-terracotta-signature", draw_cover_v2, draw_back_v2),
    ("03-sauge-portrait", draw_cover_v3, draw_back_v3),
]


def make_press_files():
    for slug, front, back in VERSIONS:
        path = OUT / f"carte-visite-maison-loratu-{slug}.pdf"
        c = canvas.Canvas(str(path), pagesize=(W,H), pageCompression=1)
        c.setTitle(f"Maison Loratu - Carte de visite - {slug}")
        front(c); c.showPage(); back(c); c.showPage(); c.save()


def draw_preview_card(c, x, y, scale, painter):
    c.saveState(); c.translate(x,y); c.scale(scale,scale)
    painter(c); c.restoreState()


def make_overview():
    A4W, A4H = 297*mm, 210*mm
    path = OUT / "cartes-visite-maison-loratu-apercu-3-versions.pdf"
    c = canvas.Canvas(str(path), pagesize=(A4W,A4H), pageCompression=1)
    set_fill(c, CREAM); c.rect(0,0,A4W,A4H,fill=1,stroke=0)
    text(c, 18*mm, A4H-18*mm, "Maison Loratu", "Times-Roman", 21, DEEP)
    text(c, 18*mm, A4H-25*mm, "Trois propositions de cartes de visite", "Helvetica", 9, MUTED)
    scale=.53
    x1, x2 = 18*mm, 163*mm
    rows = [(A4H-70*mm, VERSIONS[0], "01  ÉDITORIALE CRÈME"),
            (A4H-128*mm, VERSIONS[1], "02  TERRACOTTA SIGNATURE"),
            (A4H-186*mm, VERSIONS[2], "03  SAUGE & PORTRAIT")]
    for y, (_, front, back), label in rows:
        text(c, 18*mm, y+36*mm, label, "Helvetica-Bold", 7, TERRA, .5)
        draw_preview_card(c, x1, y, scale, front)
        draw_preview_card(c, x2, y, scale, back)
        c.setStrokeColor(HexColor("#D4C0A8")); c.setLineWidth(.4)
        c.rect(x1,y,W*scale,H*scale,fill=0,stroke=1)
        c.rect(x2,y,W*scale,H*scale,fill=0,stroke=1)
    c.saveState()
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7)
    c.drawRightString(A4W-18*mm, 10*mm, "Format fini 85 × 55 mm • fond perdu 3 mm")
    c.restoreState()
    c.save()


if __name__ == "__main__":
    make_press_files()
    make_overview()
