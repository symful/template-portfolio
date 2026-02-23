"""
generate_infographic.py
Task 3 – A3 Infographic: "Peluang Emas Karier Teknologi di Indonesia"

Canvas : A3 @ 300 DPI = 3508 x 4961 px
Library: Pillow
Theme  : Dark background with green accent matching portfolio.json
Output : public/assets/assignments/assignment-3-infographic.png

Design decisions:
  - No emojis (font can't render them properly)
  - Fewer sections, larger text to prevent clipping
  - Bar labels drawn BELOW bars, not inside
  - Only 3 main sections: Stats, Skills, Insight
"""

import os
from PIL import Image, ImageDraw, ImageFont

# ─── Output ───────────────────────────────────────────────────────────────────
OUT_DIR  = "public/assets/assignments"
OUT_FILE = os.path.join(OUT_DIR, "assignment-3-infographic.png")

# ─── Canvas ───────────────────────────────────────────────────────────────────
W, H = 3508, 4961
PAD  = 200
CONTENT_W = W - PAD * 2

# ─── Colors ───────────────────────────────────────────────────────────────────
BG       = "#0a0a0a"
SURFACE  = "#171717"
SURFACE2 = "#262626"
BORDER   = "#404040"
GREEN    = "#10b981"
GREEN_LT = "#6ee7b7"
WHITE    = "#f5f5f5"
MUTED    = "#a3a3a3"
FAINT    = "#737373"

# ─── Fonts ────────────────────────────────────────────────────────────────────
FONT_DIR = "/usr/share/fonts/TTF"

def _font(name, size):
    path = os.path.join(FONT_DIR, name)
    if os.path.exists(path):
        return ImageFont.truetype(path, size)
    return ImageFont.load_default()

F_TITLE   = _font("segoeuib.ttf", 150)
F_HEADING = _font("segoeuib.ttf", 90)
F_BODY    = _font("segoeui.ttf",  64)
F_BOLD    = _font("segoeuib.ttf", 64)
F_LABEL   = _font("segoeuib.ttf", 58)
F_SMALL   = _font("segoeui.ttf",  50)
F_BIG_NUM = _font("segoeuib.ttf", 96)

# ─── Helpers ──────────────────────────────────────────────────────────────────

def wrap_text(draw, text, font, max_w):
    """Word-wrap text. Returns list of lines."""
    words = text.split()
    lines, cur = [], []
    for w in words:
        test = " ".join(cur + [w])
        if draw.textbbox((0, 0), test, font=font)[2] > max_w and cur:
            lines.append(" ".join(cur))
            cur = [w]
        else:
            cur.append(w)
    if cur:
        lines.append(" ".join(cur))
    return lines


def draw_wrapped(draw, text, x, y, font, fill, max_w, spacing=16):
    """Draw wrapped text, returns y after last line."""
    for line in wrap_text(draw, text, font, max_w):
        draw.text((x, y), line, font=font, fill=fill)
        h = draw.textbbox((0, 0), line, font=font)[3]
        y += h + spacing
    return y


def draw_hbar(draw, x, y, w, h, pct, fg=GREEN, bg=SURFACE2):
    """Progress bar with rounded corners. pct is 0-100."""
    draw.rounded_rectangle([x, y, x + w, y + h], radius=h // 2, fill=bg)
    filled = max(int(w * pct / 100), h)
    draw.rounded_rectangle([x, y, x + filled, y + h], radius=h // 2, fill=fg)


def draw_divider(draw, y):
    draw.line([(PAD, y), (W - PAD, y)], fill=BORDER, width=3)
    return y + 40


# ─── Build poster ─────────────────────────────────────────────────────────────

def build():
    os.makedirs(OUT_DIR, exist_ok=True)
    img  = Image.new("RGB", (W, H), color=BG)
    draw = ImageDraw.Draw(img)

    y = 0

    # ── TOP BANNER ──────────────────────────────────────────────────────────
    draw.rectangle([0, 0, W, 340], fill=GREEN)
    draw.text((PAD, 50), "HIMPUNAN MAHASISWA KOMPUTER", font=F_LABEL, fill=BG)
    draw.text((PAD, 120), "Teknik Komputer dan Informatika - Politeknik Negeri Bandung",
              font=F_SMALL, fill="#064e3b")
    draw.text((PAD, 210), "INFOGRAFIS INFORMATIF  |  TEMA: KARIER",
              font=F_BOLD, fill=BG)
    y = 380

    # ── TITLE ───────────────────────────────────────────────────────────────
    draw.text((PAD, y), "Peluang Emas", font=F_TITLE, fill=WHITE)
    y += 180
    draw.text((PAD, y), "Karier Teknologi", font=F_TITLE, fill=GREEN)
    y += 180
    draw.text((PAD, y), "di Indonesia", font=F_TITLE, fill=WHITE)
    y += 220

    # Intro paragraph
    intro = (
        "Di era disrupsi digital, sektor teknologi menjadi ladang karier paling "
        "menjanjikan. Namun, lanskap ini berubah cepat dengan hadirnya AI. "
        "Bagaimana posisi kita sebagai calon teknolog Indonesia?"
    )
    y = draw_wrapped(draw, intro, PAD, y, F_BODY, MUTED, CONTENT_W)
    y += 20
    y = draw_divider(draw, y)
    y += 10

    # ── SECTION 1: DATA STATISTIK ───────────────────────────────────────────
    draw.text((PAD, y), "DATA & STATISTIK", font=F_HEADING, fill=GREEN)
    y += 120

    stats = [
        ("92%",   92,  "Developer Dunia Menggunakan AI Coding Tools",
         "Telah mengadopsi GitHub Copilot dan AI tools sejenis dalam pekerjaan harian.",
         "GitHub Developer Survey 2024"),
        ("78%",   78,  "Rekruter IT Prioritaskan Multi-Skill",
         "Kandidat dengan lebih dari satu bahasa pemrograman dan portofolio nyata lebih diprioritaskan.",
         "LinkedIn Workforce Report 2024"),
        ("600K",  20,  "Talenta Digital Dibutuhkan Per Tahun",
         "Indonesia membutuhkan 600.000 talenta digital/tahun, namun baru 20% terpenuhi.",
         "Kementerian Kominfo 2024"),
        ("35%",   35,  "Pertumbuhan Lowongan AI/ML Engineer",
         "Posisi AI/ML Engineer tumbuh 35% YoY di Asia Tenggara.",
         "World Economic Forum 2023"),
    ]

    BAR_H = 44
    for big_num, pct, title, desc, source in stats:
        bar_pct = min(pct, 100)

        # Big number + title on same line
        draw.text((PAD, y), big_num, font=F_BIG_NUM, fill=GREEN_LT)
        num_w = draw.textbbox((0, 0), big_num, font=F_BIG_NUM)[2]
        draw.text((PAD + num_w + 30, y + 15), title, font=F_BOLD, fill=WHITE)
        y += 110

        # Bar
        draw_hbar(draw, PAD, y, CONTENT_W, BAR_H, bar_pct)
        y += BAR_H + 14

        # Description
        y = draw_wrapped(draw, desc, PAD, y, F_BODY, MUTED, CONTENT_W, spacing=10)
        # Source
        draw.text((PAD, y), f"Sumber: {source}", font=F_SMALL, fill=FAINT)
        y += 60
        y = draw_divider(draw, y)
        y += 10

    # ── SECTION 2: SKILL PALING DICARI ──────────────────────────────────────
    draw.text((PAD, y), "SKILL PALING DICARI 2026", font=F_HEADING, fill=GREEN)
    y += 120

    skills = [
        ("AI / Machine Learning Integration", 95),
        ("Cloud Infrastructure (AWS/GCP)",    88),
        ("Full-Stack Web Development",        85),
        ("Mobile Development (Flutter, RN)",  80),
        ("Cybersecurity & Secure Coding",     72),
    ]

    for name, pct in skills:
        draw.text((PAD, y), f"{name}  -  {pct}%", font=F_LABEL, fill=WHITE)
        y += 70
        draw_hbar(draw, PAD, y, CONTENT_W, BAR_H, pct)
        y += BAR_H + 22

    y += 10
    y = draw_divider(draw, y)
    y += 10

    # ── SECTION 3: INSIGHT ──────────────────────────────────────────────────
    draw.text((PAD, y), "INSIGHT & ANALISIS", font=F_HEADING, fill=GREEN)
    y += 120

    insights = [
        ("AI bukan ancaman, melainkan force multiplier.",
         "Programmer yang mengadopsi AI tools terbukti 55% lebih produktif. "
         "Kunci adaptasi: kuasai System Design dan Problem Solving."),
        ("Indonesia masih defisit talenta digital.",
         "Gap 600.000 orang/tahun adalah peluang besar. Lulusan dengan "
         "portofolio nyata dan kapasitas lintas-disiplin akan sangat premium."),
        ("Spesialisasi mengalahkan generalisasi.",
         "Pilih satu domain, kuasai sedalam mungkin, bangun portofolio, dan "
         "aktif berkontribusi ke komunitas open-source."),
    ]

    for title, body in insights:
        # Card background
        lines = wrap_text(draw, body, F_BODY, CONTENT_W - 100)
        line_h = draw.textbbox((0, 0), "Ag", font=F_BODY)[3] + 10
        card_h = 80 + len(lines) * line_h + 30
        draw.rounded_rectangle([PAD, y, W - PAD, y + card_h],
                                radius=20, fill=SURFACE)
        draw.rounded_rectangle([PAD, y, PAD + 12, y + card_h],
                                radius=6, fill=GREEN)
        draw.text((PAD + 40, y + 20), title, font=F_BOLD, fill=GREEN_LT)
        ty = y + 80
        for line in lines:
            draw.text((PAD + 40, ty), line, font=F_BODY, fill=MUTED)
            ty += line_h
        y += card_h + 20

    # ── FOOTER ──────────────────────────────────────────────────────────────
    footer_h = 160
    footer_y = H - footer_h
    draw.rectangle([0, footer_y, W, H], fill=SURFACE)
    draw.line([(0, footer_y), (W, footer_y)], fill=BORDER, width=3)

    draw.text((PAD, footer_y + 30),
              "Dibuat oleh: Kemal Ardian  |  HIMAKOM - Politeknik Negeri Bandung  |  2026",
              font=F_SMALL, fill=MUTED)
    draw.text((PAD, footer_y + 100),
              "Sumber: GitHub 2024 | LinkedIn 2024 | Kominfo 2024 | WEF 2023",
              font=F_SMALL, fill=FAINT)

    # ── SAVE ────────────────────────────────────────────────────────────────
    img.save(OUT_FILE, dpi=(300, 300))
    size_kb = os.path.getsize(OUT_FILE) / 1024
    print(f"Infografis berhasil dibuat: {OUT_FILE} ({size_kb:.0f} KB)")


if __name__ == "__main__":
    build()
