#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import FancyBboxPatch, Circle, Polygon, Rectangle
import numpy as np
from PIL import Image
import os

def setup_matplotlib_for_plotting():
    """Setup matplotlib for plotting with proper configuration."""
    import warnings
    import matplotlib.pyplot as plt
    
    warnings.filterwarnings('default')
    plt.switch_backend("Agg")
    plt.style.use("default")
    
    # Configure fonts for Vietnamese text
    plt.rcParams["font.sans-serif"] = ["Arial Unicode MS", "SimHei", "DejaVu Sans"]
    plt.rcParams["axes.unicode_minus"] = False

def create_modern_recruitment_poster():
    """Create a modern Canva-style recruitment poster with background images"""
    setup_matplotlib_for_plotting()
    
    # Create figure and axis
    fig, ax = plt.subplots(1, 1, figsize=(10, 15))
    
    # Set background color
    fig.patch.set_facecolor('#F8F9FA')
    
    # Define colors (Modern Canva-style palette)
    primary_blue = '#005A9C'
    accent_blue = '#4FC3F7'
    accent_purple = '#8E24AA'
    accent_orange = '#FF7043'
    light_blue = '#E3F2FD'
    light_purple = '#F3E5F5'
    light_orange = '#FFE0B2'
    text_dark = '#1A202C'
    text_gray = '#5A6C7D'
    white = '#FFFFFF'
    dark_overlay = (0, 90, 156, 0.85)  # RGBA tuple
    purple_overlay = (142, 36, 170, 0.85)  # RGBA tuple
    
    # Try to load background image
    background_image = None
    try:
        if os.path.exists('/workspace/imgs/professional_garment_factory_worker_sewing.jpg'):
            img = Image.open('/workspace/imgs/professional_garment_factory_worker_sewing.jpg')
            # Resize to fit poster dimensions
            img_resized = img.resize((800, 600), Image.Resampling.LANCZOS)
            background_image = np.array(img_resized)
    except:
        pass
    
    # Background section with image
    if background_image is not None:
        # Display background image
        ax.imshow(background_image, extent=[0, 1, 0.4, 1], alpha=0.7, aspect='auto')
    
    # Add gradient overlay on background image
    overlay_gradient = np.linspace(0.4, 1, 100).reshape(-1, 1)
    ax.imshow(overlay_gradient, extent=[0, 1, 0.4, 1], cmap='Blues', alpha=0.6, aspect='auto')
    
    # Modern Header with Glass Morphism
    header_rect = FancyBboxPatch(
        (0.1, 0.82), 0.8, 0.15,
        boxstyle="round,pad=0.02",
        facecolor=primary_blue,
        edgecolor='white',
        linewidth=2,
        alpha=0.95
    )
    ax.add_patch(header_rect)
    
    # Company Logo with modern styling
    logo_circle = Circle((0.2, 0.895), 0.04, facecolor=accent_orange, alpha=0.9, edgecolor='white', linewidth=2)
    ax.add_patch(logo_circle)
    ax.text(0.2, 0.895, 'BH', fontsize=16, fontweight='800', 
            ha='center', va='center', color='white')
    
    # Company Name with better typography
    ax.text(0.35, 0.915, 'CÔNG TY CP MAY BHAD', fontsize=13, fontweight='800',
            ha='left', va='center', color='white')
    ax.text(0.35, 0.88, 'QUẢNG HÙNG', fontsize=11, fontweight='500',
            ha='left', va='center', color=accent_blue)
    
    # Contact Info in modern style
    contact_bg = FancyBboxPatch(
        (0.7, 0.84), 0.25, 0.08,
        boxstyle="round,pad=0.01",
        facecolor='white',
        alpha=0.9,
        edgecolor=accent_orange,
        linewidth=1.5
    )
    ax.add_patch(contact_bg)
    
    ax.text(0.825, 0.89, 'Liên hệ: Ms Huyền', fontsize=9, fontweight='600',
            ha='center', va='center', color=primary_blue)
    ax.text(0.825, 0.855, '0912.776718', fontsize=11, fontweight='800',
            ha='center', va='center', color=accent_orange)
    
    # Urgent Badge with modern design
    urgent_bg = FancyBboxPatch(
        (0.8, 0.95), 0.15, 0.04,
        boxstyle="round,pad=0.01",
        facecolor=accent_orange,
        alpha=0.95,
        edgecolor='white',
        linewidth=2
    )
    ax.add_patch(urgent_bg)
    ax.text(0.875, 0.97, 'TUYỂN GẤP!', fontsize=9, fontweight='900',
            ha='center', va='center', color='white')
    
    # Main Hero Section with modern typography
    hero_bg = FancyBboxPatch(
        (0.15, 0.62), 0.7, 0.12,
        boxstyle="round,pad=0.03",
        facecolor=accent_purple,
        alpha=0.9,
        edgecolor=accent_purple,
        linewidth=3
    )
    ax.add_patch(hero_bg)
    
    # Modern Title with gradient effect
    ax.text(0.5, 0.71, 'TUYỂN DỤNG', fontsize=28, fontweight='900',
            ha='center', va='center', color='white')
    
    # Job Position with highlight
    job_bg = FancyBboxPatch(
        (0.2, 0.66), 0.6, 0.06,
        boxstyle="round,pad=0.01",
        facecolor='white',
        alpha=0.95,
        edgecolor=accent_blue,
        linewidth=2
    )
    ax.add_patch(job_bg)
    ax.text(0.5, 0.69, 'KẾ TOÁN TỔNG HỢP', fontsize=18, fontweight='800',
            ha='center', va='center', color=primary_blue)
    
    # Vacancy Count with modern styling
    vacancy_bg = FancyBboxPatch(
        (0.3, 0.585), 0.4, 0.035,
        boxstyle="round,pad=0.008",
        facecolor=light_orange,
        alpha=0.9,
        edgecolor=accent_orange,
        linewidth=2
    )
    ax.add_patch(vacancy_bg)
    ax.text(0.5, 0.602, 'SỐ LƯỢNG: 02 NGƯỜI', fontsize=12, fontweight='700',
            ha='center', va='center', color=accent_orange)
    
    # Decorative shapes in hero section
    # Circle accent
    circle1 = Circle((0.85, 0.68), 0.03, facecolor=accent_blue, alpha=0.7)
    ax.add_patch(circle1)
    
    # Square accent  
    square1 = Rectangle((0.85, 0.62), 0.025, 0.025, facecolor=accent_purple, alpha=0.7)
    ax.add_patch(square1)
    
    # Content Cards Section with Modern Layout
    # Left Card - Requirements
    left_card = FancyBboxPatch(
        (0.1, 0.15), 0.35, 0.4,
        boxstyle="round,pad=0.02",
        facecolor='white',
        edgecolor=primary_blue,
        linewidth=2.5,
        alpha=0.95
    )
    ax.add_patch(left_card)
    
    # Card header with gradient
    header1 = FancyBboxPatch(
        (0.12, 0.51), 0.31, 0.06,
        boxstyle="round,pad=0.01",
        facecolor=light_blue,
        edgecolor=primary_blue,
        linewidth=1
    )
    ax.add_patch(header1)
    
    ax.text(0.275, 0.54, 'YÊU CẦU ỨNG VIÊN', fontsize=13, fontweight='800',
            ha='center', va='center', color=primary_blue)
    
    # Modern requirements list with colored bullets
    requirements = [
        ('Thành thạo tin học văn phòng (Excel, Word)', accent_blue),
        ('Nhanh nhẹn, làm việc cẩn thận, có trách nhiệm', accent_purple),
        ('Ưu tiên có kinh nghiệm làm việc trong ngành may mặc', accent_orange),
        ('Có khả năng làm việc độc lập và theo nhóm', primary_blue)
    ]
    
    for i, (text, color) in enumerate(requirements):
        # Modern bullet circle
        bullet = Circle((0.15, 0.49 - i*0.06), 0.012, facecolor=color, alpha=0.8)
        ax.add_patch(bullet)
        ax.text(0.175, 0.49 - i*0.06, text, fontsize=11, fontweight='500',
                ha='left', va='center', color=text_dark)
    
    # Right Card - Benefits
    right_card = FancyBboxPatch(
        (0.55, 0.15), 0.35, 0.4,
        boxstyle="round,pad=0.02",
        facecolor='white',
        edgecolor=accent_purple,
        linewidth=2.5,
        alpha=0.95
    )
    ax.add_patch(right_card)
    
    # Card header with gradient
    header2 = FancyBboxPatch(
        (0.57, 0.51), 0.31, 0.06,
        boxstyle="round,pad=0.01",
        facecolor=light_purple,
        edgecolor=accent_purple,
        linewidth=1
    )
    ax.add_patch(header2)
    
    ax.text(0.725, 0.54, 'QUYỀN LỢI & THU NHẬP', fontsize=13, fontweight='800',
            ha='center', va='center', color=accent_purple)
    
    # Salary highlight with modern design
    salary_bg = FancyBboxPatch(
        (0.6, 0.44), 0.25, 0.08,
        boxstyle="round,pad=0.01",
        facecolor=light_orange,
        alpha=0.9,
        edgecolor=accent_orange,
        linewidth=2
    )
    ax.add_patch(salary_bg)
    
    ax.text(0.725, 0.485, 'Thu nhập', fontsize=10, fontweight='700',
            ha='center', va='center', color=accent_orange)
    ax.text(0.725, 0.455, 'THỎA THUẬN', fontsize=14, fontweight='900',
            ha='center', va='center', color=accent_orange)
    
    # Benefits list with modern styling
    benefits = [
        ('Môi trường làm việc chuyên nghiệp, năng động', accent_blue),
        ('Đầy đủ các chế độ theo quy định', accent_purple),
        ('Cơ hội phát triển nghề nghiệp', accent_orange),
        ('Chế độ bảo hiểm xã hội đầy đủ', primary_blue)
    ]
    
    for i, (text, color) in enumerate(benefits):
        # Modern star bullet
        star_size = 0.015
        star_x = 0.6 + star_size * np.cos(np.linspace(0, 2*np.pi, 6))
        star_y = 0.39 - i*0.06 + star_size * np.sin(np.linspace(0, 2*np.pi, 6))
        star = Polygon(list(zip(star_x, star_y)), facecolor=color, alpha=0.8)
        ax.add_patch(star)
        ax.text(0.625, 0.39 - i*0.06, text, fontsize=11, fontweight='500',
                ha='left', va='center', color=text_dark)
    
    # Footer Section with Call-to-Action
    footer_bg = FancyBboxPatch(
        (0.05, 0.02), 0.9, 0.12,
        boxstyle="round,pad=0.02",
        facecolor=primary_blue,
        edgecolor=accent_blue,
        linewidth=3,
        alpha=0.95
    )
    ax.add_patch(footer_bg)
    
    # CTA Card with modern design
    cta_card = FancyBboxPatch(
        (0.15, 0.055), 0.7, 0.07,
        boxstyle="round,pad=0.015",
        facecolor='white',
        alpha=0.95,
        edgecolor=accent_orange,
        linewidth=2.5
    )
    ax.add_patch(cta_card)
    
    # CTA Text
    ax.text(0.5, 0.11, 'NỘP HỒ SƠ NGAY HÔM NAY', fontsize=14, fontweight='800',
            ha='center', va='center', color='white')
    ax.text(0.5, 0.105, 'LIÊN HỆ:', fontsize=12, fontweight='700',
            ha='center', va='center', color=accent_blue)
    ax.text(0.5, 0.065, 'Ms. Huyền: 0912.776718', fontsize=16, fontweight='900',
            ha='center', va='center', color='white')
    
    # Address with modern styling
    ax.text(0.5, 0.035, 'Địa chỉ: Thôn 3, Quảng Hùng, Quảng Lưu, TP Sầm Sơn, Thanh Hóa', 
            fontsize=9, fontweight='500', ha='center', va='center', 
            color=accent_blue, style='italic')
    
    # Company Footer with branding
    ax.text(0.5, 0.015, 'CÔNG TY CP MAY BHAD - QUẢNG HÙNG', 
            fontsize=11, fontweight='700', ha='center', va='center', 
            color='white')
    
    # Decorative elements
    # Floating shapes
    float_circle1 = Circle((0.05, 0.95), 0.02, facecolor=accent_blue, alpha=0.6)
    ax.add_patch(float_circle1)
    
    float_circle2 = Circle((0.95, 0.5), 0.025, facecolor=accent_purple, alpha=0.6)
    ax.add_patch(float_circle2)
    
    float_square = Rectangle((0.92, 0.85), 0.03, 0.03, facecolor=accent_orange, alpha=0.6)
    ax.add_patch(float_square)
    
    # Modern dividers
    divider1 = Rectangle((0.1, 0.55), 0.35, 0.003, facecolor=primary_blue, alpha=0.8)
    ax.add_patch(divider1)
    
    divider2 = Rectangle((0.55, 0.55), 0.35, 0.003, facecolor=accent_purple, alpha=0.8)
    ax.add_patch(divider2)
    
    # Set axis properties
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.set_aspect('equal')
    ax.axis('off')
    
    # Save the poster
    plt.tight_layout()
    plt.savefig('/workspace/poster_modern_canva_style.png', dpi=300, bbox_inches='tight', 
                facecolor='#F8F9FA', edgecolor='none')
    plt.close()
    
    print("✅ Poster hiện đại Canva-style đã được tạo thành công: poster_modern_canva_style.png")

if __name__ == "__main__":
    create_modern_recruitment_poster()