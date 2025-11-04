#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import FancyBboxPatch, Circle
import numpy as np

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

def create_clean_recruitment_poster():
    """Create a clean professional recruitment poster for BHAD Company"""
    setup_matplotlib_for_plotting()
    
    # Create figure and axis
    fig, ax = plt.subplots(1, 1, figsize=(10, 15))
    
    # Set background color
    fig.patch.set_facecolor('white')
    
    # Define colors
    primary_blue = '#005A9C'
    accent_yellow = '#FFC400'
    light_blue = '#E6F0F9'
    text_dark = '#1A202C'
    text_gray = '#4A5568'
    
    # Header Section (Height: 2.5)
    header_rect = FancyBboxPatch(
        (0.05, 0.78), 0.9, 0.15,
        boxstyle="round,pad=0.02",
        facecolor=primary_blue,
        edgecolor='none'
    )
    ax.add_patch(header_rect)
    
    # Company Logo
    logo_circle = Circle((0.15, 0.855), 0.025, facecolor='white', alpha=0.2)
    ax.add_patch(logo_circle)
    ax.text(0.15, 0.855, 'BH', fontsize=18, fontweight='bold', 
            ha='center', va='center', color='white')
    
    # Company Name
    ax.text(0.22, 0.875, 'CÔNG TY CP MAY BHAD', fontsize=14, fontweight='bold',
            ha='left', va='center', color='white')
    ax.text(0.22, 0.835, 'QUẢNG HÙNG', fontsize=11, fontweight='normal',
            ha='left', va='center', color='white', alpha=0.9)
    
    # Contact Info in Header
    ax.text(0.85, 0.875, 'Liên hệ:', fontsize=10, fontweight='600',
            ha='right', va='center', color='white', alpha=0.9)
    ax.text(0.85, 0.845, 'Ms Huyền: 0912.776718', fontsize=12, fontweight='bold',
            ha='right', va='center', color=accent_yellow)
    
    # Urgent Badge
    urgent_rect = FancyBboxPatch(
        (0.82, 0.93), 0.15, 0.04,
        boxstyle="round,pad=0.01",
        facecolor=accent_yellow,
        edgecolor='none'
    )
    ax.add_patch(urgent_rect)
    ax.text(0.895, 0.95, 'TUYỂN GẤP', fontsize=9, fontweight='bold',
            ha='center', va='center', color=text_dark)
    
    # Hero Section (Height: 4)
    hero_rect = FancyBboxPatch(
        (0.05, 0.58), 0.9, 0.18,
        boxstyle="round,pad=0.02",
        facecolor=light_blue,
        edgecolor='none'
    )
    ax.add_patch(hero_rect)
    
    # Main Title
    ax.text(0.5, 0.71, 'TUYỂN DỤNG', fontsize=36, fontweight='800',
            ha='center', va='center', color=primary_blue)
    
    # Underline
    underline = patches.Rectangle((0.43, 0.675), 0.14, 0.008, 
                                 facecolor=accent_yellow)
    ax.add_patch(underline)
    
    # Job Position
    ax.text(0.5, 0.635, 'KẾ TOÁN TỔNG HỢP', fontsize=24, fontweight='700',
            ha='center', va='center', color=text_dark)
    
    # Vacancy Count
    vacancy_rect = FancyBboxPatch(
        (0.3, 0.6), 0.4, 0.05,
        boxstyle="round,pad=0.01",
        facecolor='white',
        edgecolor=primary_blue,
        linewidth=1.5,
        alpha=0.9
    )
    ax.add_patch(vacancy_rect)
    ax.text(0.5, 0.625, 'SỐ LƯỢNG: 02 NGƯỜI', fontsize=13, fontweight='600',
            ha='center', va='center', color=primary_blue)
    
    # Content Cards Section (Height: 5.5)
    # Left Card - Requirements
    left_card = FancyBboxPatch(
        (0.05, 0.16), 0.42, 0.38,
        boxstyle="round,pad=0.02",
        facecolor='white',
        edgecolor='lightgray',
        linewidth=1
    )
    ax.add_patch(left_card)
    
    # Card Title
    ax.text(0.26, 0.51, '● Yêu Cầu Ứng Viên', fontsize=14, fontweight='600',
            ha='center', va='center', color=primary_blue)
    
    # Requirements List
    requirements = [
        '• Thành thạo tin học văn phòng (Excel, Word)',
        '• Nhanh nhẹn, làm việc cẩn thận, có trách nhiệm',
        '• Ưu tiên có kinh nghiệm làm việc trong ngành may mặc',
        '• Có khả năng làm việc độc lập và theo nhóm'
    ]
    
    for i, req in enumerate(requirements):
        ax.text(0.08, 0.47 - i*0.06, req, fontsize=11, fontweight='normal',
                ha='left', va='center', color=text_dark)
    
    # Right Card - Benefits
    right_card = FancyBboxPatch(
        (0.53, 0.16), 0.42, 0.38,
        boxstyle="round,pad=0.02",
        facecolor='white',
        edgecolor='lightgray',
        linewidth=1
    )
    ax.add_patch(right_card)
    
    # Card Title
    ax.text(0.74, 0.51, '● Quyền Lợi & Thu Nhập', fontsize=14, fontweight='600',
            ha='center', va='center', color=primary_blue)
    
    # Salary Highlight
    salary_rect = FancyBboxPatch(
        (0.57, 0.45), 0.34, 0.08,
        boxstyle="round,pad=0.01",
        facecolor=accent_yellow,
        edgecolor='none'
    )
    ax.add_patch(salary_rect)
    ax.text(0.74, 0.495, 'Thu nhập', fontsize=9, fontweight='600',
            ha='center', va='center', color=text_dark)
    ax.text(0.74, 0.465, 'Thỏa thuận', fontsize=16, fontweight='800',
            ha='center', va='center', color=text_dark)
    
    # Benefits List
    benefits = [
        '• Môi trường làm việc chuyên nghiệp, năng động',
        '• Đầy đủ các chế độ theo quy định',
        '• Cơ hội phát triển nghề nghiệp',
        '• Chế độ bảo hiểm xã hội đầy đủ'
    ]
    
    for i, benefit in enumerate(benefits):
        ax.text(0.57, 0.39 - i*0.06, benefit, fontsize=11, fontweight='normal',
                ha='left', va='center', color=text_dark)
    
    # Footer Section (Height: 2.7)
    footer_rect = FancyBboxPatch(
        (0.05, 0.02), 0.9, 0.12,
        boxstyle="round,pad=0.02",
        facecolor=primary_blue,
        edgecolor='none'
    )
    ax.add_patch(footer_rect)
    
    # Call to Action
    cta_rect = FancyBboxPatch(
        (0.2, 0.09), 0.6, 0.08,
        boxstyle="round,pad=0.02",
        facecolor='white',
        alpha=0.15,
        edgecolor='white',
        linewidth=1
    )
    ax.add_patch(cta_rect)
    ax.text(0.5, 0.13, 'NỘP HỒ SƠ & LIÊN HỆ', fontsize=16, fontweight='700',
            ha='center', va='center', color='white')
    ax.text(0.5, 0.105, 'Ms. Huyền: 0912.776718', fontsize=15, fontweight='600',
            ha='center', va='center', color=accent_yellow)
    
    # Address
    ax.text(0.5, 0.05, 'Địa chỉ: Thôn 3, Quảng Hùng, Quảng Lưu, TP Sầm Sơn, Thanh Hóa', 
            fontsize=10, fontweight='normal', ha='center', va='center', 
            color='white', alpha=0.9)
    
    # Company Footer
    ax.text(0.5, 0.025, 'CÔNG TY CP MAY BHAD - QUẢNG HÙNG', 
            fontsize=12, fontweight='600', ha='center', va='center', 
            color='white')
    
    # Set axis properties
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.set_aspect('equal')
    ax.axis('off')
    
    # Save the poster
    plt.tight_layout()
    plt.savefig('/workspace/poster_bhad_clean.png', dpi=300, bbox_inches='tight', 
                facecolor='white', edgecolor='none')
    plt.close()
    
    print("✅ Poster clean đã được tạo thành công: poster_bhad_clean.png")

if __name__ == "__main__":
    create_clean_recruitment_poster()