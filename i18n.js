// Multi-language system for BHAD Garment Website
// English (primary) and Vietnamese (secondary)

const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About Us", 
        nav_capacity: "Capacity",
        nav_production: "Production Process",
        nav_quality: "Quality Control",
        nav_management: "Management",
        nav_equipment: "Equipment",
        nav_products: "Products",
        nav_certificates: "Certificates",
        nav_contact: "Contact",
        nav_collections: "Collections",
        
        // Gallery Section
        nav_gallery: "Gallery",
        gallery_title: "Gallery",
        gallery_subtitle: "Discover our modern facilities, production process, and working environment",
        gallery_entrance_title: "Factory Entrance",
        gallery_entrance_desc: "Main entrance and company sign",
        gallery_storage_title: "Warehouse Storage",
        gallery_storage_desc: "Organized storage system for materials",
        gallery_qc_title: "Quality Control",
        gallery_qc_desc: "Skilled workers in quality inspection",
        gallery_packaging_title: "Packaging Process",
        gallery_packaging_desc: "Professional packaging and finishing",
        gallery_finished_title: "Finished Goods",
        gallery_finished_desc: "Ready-to-ship products warehouse",
        gallery_inspection_title: "Final Inspection",
        gallery_inspection_desc: "Final quality check before shipping",
        
        // Hero Section
        hero_subtitle: "Professional Garment Manufacturer - High Quality - Reliable",
        hero_products_per_year: "Products/year",
        hero_employees: "Employees", 
        hero_years_experience: "Years Experience",
        hero_learn_more: "Learn More",
        
        // About Section
        about_title: "About Us",
        about_subtitle: "Since 2011, BHAD Garment has been committed to providing the highest quality products",
        about_established_title: "Established in 2011",
        about_established_desc: "Officially established on June 16, 2011 in Thanh Hoa, Vietnam",
        about_mission_title: "Mission",
        about_mission_desc: "Focus on intellect and strength to overcome difficulties, seize opportunities, innovate awareness",
        about_values_title: "Core Values",
        about_values_desc: "Quality above all. Reputation in customer service. Customer satisfaction is the success of the enterprise",
        
        // Capacity Section
        capacity_title: "Production Capacity",
        capacity_subtitle: "Modern infrastructure with 25,000 m² area and advanced production lines",
        
        // QC Inspection
        qc_title: "Quality Inspection",
        qc_desc: "32 professional QC/QA staff",
        
        // Showroom
        showroom_title: "Showroom & Meeting",
        showroom_desc: "Product presentation for clients",
        
        // Capacity Details
        total_area: "Total Area:",
        factory_area: "Factory:",
        warehouse_1: "Warehouse 1:",
        warehouse_2: "Warehouse 2:",
        
        // Monthly Production
        monthly_output: "Monthly Output",
        tshirt_output: "T-shirts:",
        pants_output: "Pants:",
        fashionable_output: "Fashionable Jackets:",
        hoodie_output: "Hoodies:",
        jacket_output: "Jackets:",
        other_products: "Other Products:",
        
        // Modern Equipment
        modern_equipment: "Modern Equipment",
        total_machines: "Total Machines:",
        origin: "Origin:",
        production_lines: "Production Lines:",
        machines_per_line: "Machines/Line:",
        
        // Production Process Section
        production_title: "Production Process",
        production_subtitle: "From modern machinery to product finishing - Professional process",
        process_cnc_title: "CNC Automatic Machine",
        process_cnc_desc: "High technology with digital control screen, precise material processing",
        process_juck_title: "JUCK Sewing Machine", 
        process_juck_desc: "Professional workers with detailed work instructions, ensuring quality",
        process_zoje_title: "ZOJE Sewing Machine",
        process_zoje_desc: "Sports product production with XDY Sport logo, high precision",
        process_quality_title: "Quality Inspection & Folding",
        process_quality_desc: "Meticulous workers fold and inspect each product before packaging",
        process_ironing_title: "Product Finishing",
        process_ironing_desc: "Ironing and folding products with various colors, ready for export",
        process_packaging_title: "Professional Packaging",
        process_packaging_desc: "Packaging team with many carefully wrapped and categorized products",
        
        // Quality Control Section  
        quality_title: "Quality Control",
        quality_subtitle: "Strict QC/QA system with 32 experienced specialists",
        
        // Quality Inspection Types
        quality_first_title: "Quality Classification",
        quality_first_desc: "PASSED GOODS, PENDING INSPECTION, DEFECTIVE GOODS with 2-hour processing time",
        comprehensive_check_title: "Comprehensive Inspection",
        comprehensive_check_desc: "Inspection at every stage from cutting, sewing to product finishing",
        final_check_title: "Final Check",
        final_check_desc: "All products are carefully inspected before packaging and export",
        
        // Management Section
        management_title: "Management Structure",
        management_subtitle: "Experienced and professional leadership team",
        
        // Team Section
        team_title: "Human Resources",
        team_subtitle: "Professional team with 540 employees",
        
        // Equipment Section
        equipment_title: "Equipment List",
        equipment_subtitle: "Over 700 modern machines from world-leading countries",
        
        // Products Section
        products_title: "Products & Clients",
        products_subtitle: "Serving famous global brands with the highest quality",
        product_categories: "Product Categories",
        jacket_category: "Jackets",
        
        // Product Collections
        product_collections_title: "Our Product Collections",
        product_collections_subtitle: "Discover our comprehensive range of high-quality garments",
        outerwear_collection_title: "Outerwear Collection",
        outerwear_collection_desc: "Premium puffer jackets, quilted jackets, and winter coats",
        casual_wear_collection_title: "Casual Wear Collection", 
        casual_wear_collection_desc: "Comfortable everyday apparel including hoodies and casual tops",
        bottoms_collection_title: "Bottoms Collection",
        bottoms_collection_desc: "Complete range of pants, shorts, skirts, and activewear",
        knitwear_collection_title: "Knitwear Collection",
        knitwear_collection_desc: "Soft fleece, hoodies, and knit apparel for all seasons",
        main_products_title: "Main Product Lines",
        main_products_desc: "Comprehensive catalog featuring our flagship products and designs",
        
        // Certificates Section
        certificates_title: "Certificates & Awards",
        certificates_subtitle: "Prestigious certifications from international organizations",
        
        // Contact Section
        contact_title: "Contact Us",
        contact_subtitle: "Ready to cooperate and serve customers",
        
        // Button Text
        button_learn_more: "Learn More",
        button_print: "Print Certificates",
        
        // Images Alt Text
        img_factory_entrance: "BHAD Garment Factory Entrance",
        img_logo: "BHAD Garment Logo",
        img_qc_floor: "BHAD Garment Factory Floor - Quality Control",
        img_showroom: "BHAD Garment Showroom and Meeting Room",
        img_production_lines: "BHAD Production Lines Overview",
        img_export_center: "BHAD Export Center Showroom",
        img_cnc_machine: "CNC Automatic Machine PUMA",
        img_juck_machine: "JUCK Sewing Machine with Work Instructions",
        img_zoje_machine: "ZOJE Sewing Machine - Sports Production",
        img_quality_check: "Folding and Quality Inspection",
        img_ironing: "Folding and Ironing Finishing",
        img_packaging: "Professional Packaging Area",
        img_warehouse: "BHAD Warehouse with Fabric Information",
        img_compliance: "BHAD Garment Office - Compliance Room",
        img_product: "BHAD Garment Puffer Jacket Production",
        
        // Gallery Images
        gallery_overview_title: "Factory Overview",
        gallery_overview_desc: "10 modern production lines with over 700 machines",
        gallery_export_title: "Export Center",
        gallery_export_desc: "Showroom displaying products for international clients",
        gallery_lines_title: "Production Lines",
        gallery_lines_desc: "10 lines with strict quality control system",
        
        // Additional translations needed
        total_leadership: "Overall Leadership",
        machines_count: "700+ machines",
        bhad_production_lines: "BHAD Production Lines",
        modern_warehouse: "Modern Warehouse",
        total_employees: "Total Employees",
        production_lines_count: "Production Lines",
        professional_garment_manufacturer: "Professional Garment Manufacturer",
        
        // Infrastructure
        infrastructure: "Infrastructure",
        facility_layout: "Facility Layout",
        main_factory: "Main Factory",
        warehouse_1_name: "Warehouse 1",
        warehouse_2_name: "Warehouse 2",
        office: "Office",
        machine_room: "Machine Room",
        fire_system: "Fire Protection System",
        high_safety: "High Safety",
        
        // Production Management
        general_director: "General Director",
        production_dept: "Production Department",
        line_management: "Line Management",
        business_dept: "Business Department",
        market_development: "Market Development",
        qa_qc_dept: "QA/QC Department",
        quality_control: "Quality Control",
        warehouse_management: "Warehouse Management",
        material_management: "Material Management",
        
        // Departments
        cutting_dept: "Cutting Department",
        sewing_dept: "Sewing Department",
        quality_inspection_dept: "Quality Inspection Department",
        ironing_dept: "Ironing Department",
        
        // Equipment Categories
        industrial_sewing_machines: "Industrial Sewing Machines",
        cutting_finishing_machines: "Cutting & Finishing Machines",
        supporting_equipment: "Supporting Equipment",
        
        // Machine Types
        single_needle_machine: "Single Needle Machine",
        double_needle_machine: "Double Needle Machine",
        overlock_4_thread: "4-Thread Overlock Machine",
        overlock_5_thread: "5-Thread Overlock Machine",
        bartack_machine: "Bartack Machine",
        button_cutting_machine: "Button Cutting Machine",
        button_covering_machine: "Button Covering Machine",
        cnc_cutting_machine: "CNC Cutting Machine",
        cutting_machine: "Cutting Machine",
        roll_cutting_machine: "Roll Cutting Machine",
        fabric_inspection_machine: "Fabric Inspection Machine",
        industrial_ironing_machine: "Industrial Ironing Machine",
        steam_ironing_table: "Steam Ironing Table",
        kansai_machine: "Kansai/Pressed Blanching Machine",
        large_programming_machine: "Large Programming Machine",
        small_programming_machine: "Small Programming Machine",
        button_spraying_machine: "Button Spraying Machine",
        automatic_button_cover_machine: "Automatic Button Cover/Open Machine",
        generator: "Generator",
        electric_forklift: "Electric Forklift",
        
        // Country Origins
        country_origins: "Country Origins",
        china: "China",
        japan: "Japan",
        germany: "Germany",
        usa: "USA",
        
        // Contact Information
        address: "Address",
        phone: "Phone",
        email: "Email",
        working_hours: "Working Hours",
        working_schedule: "7:15 AM - 4:30 PM\n(Monday - Friday)",
        map_location: "Location Map",
        
        // Footer
        information: "Information",
        about_us_footer: "About Us",
        capacity_footer: "Capacity",
        products_footer: "Products",
        contact_footer: "Contact",
        copyright: "© 2024 BHAD Garment Joint Stock Company. All rights reserved.",
        
        // Team Information
        employees_per_line: "Employees/Line",
        office_staff: "Office: 20 people",
        cutting_staff: "Cutting: 28 people",
        sewing_staff: "Sewing: 360 people",
        qa_qc_staff: "QC & QA: 32 people",
        ironing_staff: "Ironing: 20 people",
        technical_staff: "Technical: 30 people",
        packing_staff: "Packing: 20 people",
        warehouse_staff: "Warehouse: 10 people",
        other_staff: "Other: 20 people",
        
        // Products
        tshirt_vietnamese: "T-shirts",
        pants_vietnamese: "Pants",
        hoodie_fleece: "Hoodies & Fleece",
        other_fashion_products: "Other Fashion Products",
        main_clients: "Main Clients",
        
        // Certificates Details
        wrap_gold_cert: "Gold certification for corporate social responsibility",
        wrap_gold_period: "Valid: 10/05/2024 - 10/05/2025",
        intertek_wca_cert: "Working condition assessment with 95.88% score",
        intertek_wca_id: "WCA Assessment #Vie20587-01",
        sac_higg_cert: "Certification from Sustainable Apparel Coalition",
        sac_higg_module: "Higg Facility & Social Module",
        its_grs_cert: "Global Recycled Standard 4.0",
        its_grs_authority: "Certified by Intertek",
        
        // Additional descriptions
        compliance_room: "Compliance Room",
        international_certifications: "International Quality Management and Certifications",
        quality_inspection_professional: "Quality Control - 32 QC/QA professionals strictly inspect",
        professional_dedicated_accurate: "Professional - Dedicated - Accurate",
        automatic_storage_system: "Automatic Storage System - 5,500 m²",
        industrial_jack_machines: "Industrial JACK Machines - 700+ machines",
        
        // Alternative labels
        infrastructure_alt: "Infrastructure",
        quality_monitoring: "Quality Monitoring",
        overall_leadership_desc: "Overall Leadership",
        
        // Missing translations
        sac_higg_title: "SAC Higg",
        meeting_rooms_cad: "Meeting rooms, CAD",
        viet_address_line1: "Hien Tay Hamlet, Quang Luu Commune",
        viet_address_line2: "Quang Xuong District, Thanh Hoa Province",
        viet_address_line3: "Vietnam"
    },
    
    vi: {
        // Navigation
        nav_home: "Trang chủ",
        nav_about: "Về chúng tôi",
        nav_capacity: "Năng lực", 
        nav_production: "Quy trình",
        nav_quality: "Chất lượng",
        nav_management: "Quản lý",
        nav_equipment: "Máy móc",
        nav_products: "Sản phẩm",
        nav_certificates: "Chứng nhận",
        nav_contact: "Liên hệ",
        nav_collections: "Bộ sưu tập",
        
        // Gallery Section
        nav_gallery: "Thư viện ảnh",
        gallery_title: "Thư viện ảnh",
        gallery_subtitle: "Khám phá cơ sở hạ tầng hiện đại, quy trình sản xuất và môi trường làm việc của chúng tôi",
        gallery_entrance_title: "Lối vào nhà máy",
        gallery_entrance_desc: "Lối vào chính và biển tượng công ty",
        gallery_storage_title: "Kho lưu trữ",
        gallery_storage_desc: "Hệ thống lưu trữ có tổ chức cho nguyên vật liệu",
        gallery_qc_title: "Kiểm soát chất lượng",
        gallery_qc_desc: "Công nhân lành nghề trong kiểm tra chất lượng",
        gallery_packaging_title: "Quy trình đóng gói",
        gallery_packaging_desc: "Đóng gói và hoàn thiện chuyên nghiệp",
        gallery_finished_title: "Thành phẩm",
        gallery_finished_desc: "Kho sản phẩm sẵn sàng xuất khẩu",
        gallery_inspection_title: "Kiểm tra cuối cùng",
        gallery_inspection_desc: "Kiểm tra chất lượng cuối cùng trước khi giao hàng",
        
        // Hero Section
        hero_subtitle: "Nhà sản xuất may mặc chuyên nghiệp - Chất lượng cao - Đáng tin cậy",
        hero_products_per_year: "Sản phẩm/năm",
        hero_employees: "Nhân viên",
        hero_years_experience: "Năm kinh nghiệm", 
        hero_learn_more: "Tìm hiểu thêm",
        
        // About Section
        about_title: "Về chúng tôi",
        about_subtitle: "Từ năm 2011 đến nay, BHAD Garment luôn cam kết mang đến những sản phẩm chất lượng cao nhất",
        about_established_title: "Thành lập năm 2011",
        about_established_desc: "Chính thức thành lập ngày 16 tháng 6 năm 2011 tại Thanh Hóa, Việt Nam",
        about_mission_title: "Sứ mệnh",
        about_mission_desc: "Tập trung vào trí tuệ và sức mạnh để vượt qua khó khăn, nắm bắt cơ hội, đổi mới nhận thức",
        about_values_title: "Giá trị cốt lõi",
        about_values_desc: "Chất lượng trên hết. Uy tín trong phục vụ khách hàng. Sự hài lòng của khách hàng là thành công của doanh nghiệp",
        
        // Capacity Section
        capacity_title: "Năng lực sản xuất",
        capacity_subtitle: "Cơ sở hạ tầng hiện đại với diện tích 25.000 m² và dây chuyền sản xuất tiên tiến",
        
        // QC Inspection
        qc_title: "Kiểm tra chất lượng",
        qc_desc: "32 nhân viên QC/QA chuyên nghiệp",
        
        // Showroom
        showroom_title: "Showroom & Meeting",
        showroom_desc: "Trình bày sản phẩm cho khách hàng",
        
        // Capacity Details
        total_area: "Tổng diện tích:",
        factory_area: "Nhà máy:",
        warehouse_1: "Kho hàng 1:",
        warehouse_2: "Kho hàng 2:",
        
        // Monthly Production
        monthly_output: "Sản lượng hàng tháng",
        tshirt_output: "Áo thun (T-shirt):",
        pants_output: "Quần (Pants):",
        fashionable_output: "Áo khoác Fashionable:",
        hoodie_output: "Áo hoodie:",
        jacket_output: "Áo khoác Jacket:",
        other_products: "Sản phẩm khác:",
        
        // Modern Equipment
        modern_equipment: "Máy móc hiện đại",
        total_machines: "Tổng máy móc:",
        origin: "Nguồn gốc:",
        production_lines: "Đường chuyền:",
        machines_per_line: "Máy/dây chuyền:",
        
        // Production Process Section
        production_title: "Quy trình sản xuất",
        production_subtitle: "Từ máy móc hiện đại đến hoàn thiện sản phẩm - Quy trình chuyên nghiệp",
        process_cnc_title: "Máy CNC tự động",
        process_cnc_desc: "Công nghệ cao với màn hình điều khiển kỹ thuật số, xử lý vật liệu chính xác",
        process_juck_title: "Máy may JUCK",
        process_juck_desc: "Công nhân chuyên nghiệp với tài liệu hướng dẫn chi tiết, đảm bảo chất lượng",
        process_zoje_title: "Máy may ZOJE",
        process_zoje_desc: "Sản xuất đồ thể thao với logo XDY Sport, độ chính xác cao",
        process_quality_title: "Kiểm tra & Gấp sản phẩm",
        process_quality_desc: "Công nhân tỉ mỉ gấp và kiểm tra từng sản phẩm trước khi đóng gói",
        process_ironing_title: "Hoàn thiện sản phẩm",
        process_ironing_desc: "Ủi và gấp sản phẩm với nhiều màu sắc khác nhau, sẵn sàng xuất khẩu",
        process_packaging_title: "Đóng gói chuyên nghiệp",
        process_packaging_desc: "Đội ngũ đóng gói với nhiều sản phẩm được bọc cẩn thận và phân loại",
        
        // Quality Control Section
        quality_title: "Kiểm soát chất lượng",
        quality_subtitle: "Hệ thống QC/QA nghiêm ngặt với 32 chuyên viên kinh nghiệm",
        
        // Quality Inspection Types
        quality_first_title: "Phân loại chất lượng",
        quality_first_desc: "HÀNG KIỂM ĐẠT, HÀNG CHỜ KIỂM, HÀNG KIỂM LỖI với thời gian xử lý 2 giờ",
        comprehensive_check_title: "Kiểm tra toàn diện",
        comprehensive_check_desc: "Kiểm tra ở mọi công đoạn từ cắt, may, đến hoàn thiện sản phẩm",
        final_check_title: "Kiểm tra cuối cùng",
        final_check_desc: "Mọi sản phẩm đều được kiểm tra kỹ lưỡng trước khi đóng gói và xuất khẩu",
        
        // Management Section
        management_title: "Bộ máy quản lý",
        management_subtitle: "Đội ngũ lãnh đạo giàu kinh nghiệm và chuyên nghiệp",
        
        // Team Section
        team_title: "Nhân sự",
        team_subtitle: "Đội ngũ chuyên nghiệp với 540 nhân viên",
        
        // Equipment Section
        equipment_title: "Danh sách máy móc",
        equipment_subtitle: "Hơn 700 máy móc hiện đại từ các nước hàng đầu thế giới",
        
        // Products Section
        products_title: "Sản phẩm & Khách hàng",
        products_subtitle: "Phục vụ các thương hiệu nổi tiếng toàn cầu với chất lượng cao nhất",
        product_categories: "Danh mục sản phẩm",
        jacket_category: "Áo khoác (Jacket)",
        
        // Product Collections
        product_collections_title: "Bộ sưu tập sản phẩm",
        product_collections_subtitle: "Khám phá dòng sản phẩm đa dạng và chất lượng cao",
        outerwear_collection_title: "Bộ sưu tập Áo khoác",
        outerwear_collection_desc: "Áo khoác phao, áo khoác đệm chất lượng cao và áo choàng mùa đông",
        casual_wear_collection_title: "Bộ sưu tập Trang phục thường ngày",
        casual_wear_collection_desc: "Trang phục hàng ngày thoải mái bao gồm hoodie và áo thun",
        bottoms_collection_title: "Bộ sưu tập Đồ mặc dưới",
        bottoms_collection_desc: "Đầy đủ các loại quần, váy, short và đồ thể thao",
        knitwear_collection_title: "Bộ sưu tập Đồ len",
        knitwear_collection_desc: "Fleece mềm mại, hoodie và đồ len cho mọi mùa",
        main_products_title: "Dòng sản phẩm chính",
        main_products_desc: "Danh mục đầy đủ sản phẩm chủ lực và thiết kế đặc trưng",
        
        // Certificates Section
        certificates_title: "Chứng nhận & Giải thưởng",
        certificates_subtitle: "Những chứng nhận uy tín từ các tổ chức quốc tế",
        
        // Contact Section
        contact_title: "Liên hệ với chúng tôi",
        contact_subtitle: "Sẵn sàng hợp tác và phục vụ quý khách hàng",
        
        // Button Text
        button_learn_more: "Tìm hiểu thêm",
        button_print: "In Chứng Nhận",
        
        // Images Alt Text
        img_factory_entrance: "Cổng vào nhà máy BHAD Garment",
        img_logo: "Logo BHAD Garment",
        img_qc_floor: "Tầng nhà máy BHAD - Kiểm soát chất lượng",
        img_showroom: "Showroom và phòng họp BHAD",
        img_production_lines: "Tổng quan dây chuyền sản xuất BHAD",
        img_export_center: "Showroom trung tâm xuất khẩu BHAD",
        img_cnc_machine: "Máy CNC tự động PUMA",
        img_juck_machine: "Máy may JUCK với tài liệu hướng dẫn",
        img_zoje_machine: "Máy may ZOJE - Sản phẩm thể thao",
        img_quality_check: "Gấp và kiểm tra chất lượng",
        img_ironing: "Gấp và ủi hoàn thiện",
        img_packaging: "Khu vực đóng gói chuyên nghiệp",
        img_warehouse: "Kho hàng BHAD với bảng thông tin vải",
        img_compliance: "Văn phòng BHAD - Phòng tuân thủ",
        img_product: "Sản xuất áo khoác phao BHAD",
        
        // Gallery Images
        gallery_overview_title: "Tổng quan nhà máy",
        gallery_overview_desc: "10 dây chuyền sản xuất hiện đại với hơn 700 máy móc",
        gallery_export_title: "Trung tâm xuất khẩu",
        gallery_export_desc: "Showroom trưng bày sản phẩm cho khách hàng quốc tế",
        gallery_lines_title: "Dây chuyền sản xuất",
        gallery_lines_desc: "10 dây chuyền với hệ thống kiểm soát chất lượng nghiêm ngặt",
        
        // Additional translations needed
        total_leadership: "Lãnh đạo tổng thể",
        machines_count: "700+ máy móc",
        bhad_production_lines: "Dây chuyền sản xuất BHAD",
        modern_warehouse: "Kho hàng hiện đại",
        total_employees: "Tổng số nhân viên",
        production_lines_count: "Dây chuyền sản xuất",
        professional_garment_manufacturer: "Nhà sản xuất may mặc chuyên nghiệp",
        
        // Infrastructure
        infrastructure: "Cơ sở hạ tầng",
        facility_layout: "Bố trí nhà máy",
        main_factory: "Nhà máy chính",
        warehouse_1_name: "Kho hàng 1",
        warehouse_2_name: "Kho hàng 2",
        office: "Văn phòng",
        machine_room: "Phòng máy",
        fire_system: "Hệ thống PCCC",
        high_safety: "An toàn cao",
        
        // Production Management
        general_director: "Tổng Giám đốc",
        production_dept: "Phòng Sản xuất",
        line_management: "Quản lý dây chuyền",
        business_dept: "Phòng Kinh doanh",
        market_development: "Phát triển thị trường",
        qa_qc_dept: "Phòng QA/QC",
        quality_control: "Kiểm soát chất lượng",
        warehouse_management: "Kho bãi",
        material_management: "Quản lý vật tư",
        
        // Departments
        cutting_dept: "Phòng Cắt",
        sewing_dept: "Phòng May",
        quality_inspection_dept: "Kiểm tra chất lượng",
        ironing_dept: "Phòng Ủi",
        
        // Equipment Categories
        industrial_sewing_machines: "Máy may công nghiệp",
        cutting_finishing_machines: "Máy cắt & hoàn thiện",
        supporting_equipment: "Thiết bị hỗ trợ",
        
        // Machine Types
        single_needle_machine: "Máy may 1 kim",
        double_needle_machine: "Máy may 2 kim",
        overlock_4_thread: "Máy overlock 4 chỉ",
        overlock_5_thread: "Máy overlock 5 chỉ",
        bartack_machine: "Máy ghim (Bartack)",
        button_cutting_machine: "Máy cắt cúc",
        button_covering_machine: "Máy đệm cúc",
        cnc_cutting_machine: "Máy CNC cắt",
        cutting_machine: "Máy cắt",
        roll_cutting_machine: "Máy cắt cuộn",
        fabric_inspection_machine: "Máy kiểm tra vải",
        industrial_ironing_machine: "Máy ủi công nghiệp",
        steam_ironing_table: "Bàn ủi hơi nước",
        kansai_machine: "Máy Kansai/Pressed blanching",
        large_programming_machine: "Máy lập trình lớn",
        small_programming_machine: "Máy lập trình nhỏ",
        button_spraying_machine: "Máy xịt cúc",
        automatic_button_cover_machine: "Máy đệm đóng/mở tự động",
        generator: "Máy phát điện",
        electric_forklift: "Forklift điện",
        
        // Country Origins
        country_origins: "Nguồn gốc xuất xứ",
        china: "Trung Quốc",
        japan: "Nhật Bản",
        germany: "Đức",
        usa: "Mỹ",
        
        // Contact Information
        address: "Địa chỉ",
        phone: "Điện thoại",
        email: "Email",
        working_hours: "Giờ làm việc",
        working_schedule: "7:15 AM - 4:30 PM\n(Thứ 2 - Thứ 6)",
        map_location: "Bản đồ vị trí",
        
        // Footer
        information: "Thông tin",
        about_us_footer: "Về chúng tôi",
        capacity_footer: "Năng lực",
        products_footer: "Sản phẩm",
        contact_footer: "Liên hệ",
        copyright: "© 2024 BHAD Garment Joint Stock Company. Mọi quyền được bảo lưu.",
        
        // Team Information
        employees_per_line: "Nhân viên/dây chuyền",
        office_staff: "Văn phòng: 20 người",
        cutting_staff: "Cắt (Cutting): 28 người",
        sewing_staff: "May (Sewing): 360 người",
        qa_qc_staff: "Kiểm tra (QC & QA): 32 người",
        ironing_staff: "Đồ phải (Iron): 20 người",
        technical_staff: "Kỹ thuật: 30 người",
        packing_staff: "Đóng gói (Packing): 20 người",
        warehouse_staff: "Kho (Warehouse): 10 người",
        other_staff: "Khác: 20 người",
        
        // Products
        tshirt_vietnamese: "Áo thun (T-shirt)",
        pants_vietnamese: "Quần (Pants)",
        hoodie_fleece: "Áo hoodie & Fleece",
        other_fashion_products: "Sản phẩm thời trang khác",
        main_clients: "Khách hàng chính",
        
        // Certificates Details
        wrap_gold_cert: "Chứng nhận vàng về trách nhiệm xã hội doanh nghiệp",
        wrap_gold_period: "Thời hạn: 10/05/2024 - 10/05/2025",
        intertek_wca_cert: "Đánh giá điều kiện làm việc với điểm số 95.88%",
        intertek_wca_id: "WCA Assessment #Vie20587-01",
        sac_higg_cert: "Chứng nhận từ Sustainable Apparel Coalition",
        sac_higg_module: "Higg Facility & Social Module",
        its_grs_cert: "Chuẩn Global Recycled Standard 4.0",
        its_grs_authority: "Chứng nhận bởi Intertek",
        
        // Additional descriptions
        compliance_room: "Phòng Tuân thủ",
        international_certifications: "Quản lý chất lượng và chứng nhận quốc tế",
        quality_inspection_professional: "Kiểm soát chất lượng - 32 chuyên viên QC/QA kiểm tra nghiêm ngặt",
        professional_dedicated_accurate: "Chuyên nghiệp - Tận tâm - Chính xác",
        automatic_storage_system: "Hệ thống lưu trữ tự động - 5.500 m²",
        industrial_jack_machines: "Máy may công nghiệp JACK - 700+ máy",
        
        // Alternative labels
        infrastructure_alt: "Cơ sở hạ tầng",
        quality_monitoring: "Giám sát chất lượng",
        overall_leadership_desc: "Lãnh đạo tổng thể",
        
        // Missing translations
        sac_higg_title: "SAC Higg",
        meeting_rooms_cad: "Phòng họp, CAD",
        viet_address_line1: "Thôn Hiền Tây, Xã Quang Lưu",
        viet_address_line2: "Huyện Quảng Xương, Tỉnh Thanh Hóa",
        viet_address_line3: "Việt Nam"
    }
};

// Language management
class I18nManager {
    constructor() {
        this.currentLang = 'en'; // Default to English
        this.init();
    }
    
    init() {
        // Set default language to English always - no browser detection
        const savedLang = localStorage.getItem('bhad_language') || 'en';
        this.setLanguage(savedLang);
        this.setupLanguageSwitcher();
        this.addDataKeys();
    }
    
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('bhad_language', lang);
        this.updateContent();
        this.updateLanguageButtons();
    }
    
    getTranslation(key) {
        return translations[this.currentLang][key] || key;
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    updateContent() {
        // Update all elements with data-key attributes
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            const translation = this.getTranslation(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update alt attributes for images
        const images = document.querySelectorAll('img[data-key]');
        images.forEach(img => {
            const key = img.getAttribute('data-key');
            const translation = this.getTranslation(key);
            img.alt = translation;
        });
    }
    
    updateLanguageButtons() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === this.currentLang);
        });
    }
    
    setupLanguageSwitcher() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    }
    
    addDataKeys() {
        // Add data-key attributes to important elements dynamically if not already present
        
        // Ensure all important elements have data-key attributes
        const elements = {
            // Navigation is already done in HTML
            '.hero-subtitle': 'hero_subtitle',
            '[data-key="hero_products_per_year"]': 'hero_products_per_year', // Already exists
            '[data-key="hero_employees"]': 'hero_employees', // Already exists  
            '[data-key="hero_years_experience"]': 'hero_years_experience', // Already exists
            '.cta-button': 'hero_learn_more',
            
            // About section already has data-keys
            // Capacity section already has data-keys
            
            // Production section
            '#production h2': 'production_title',
            '#production .section-header p': 'production_subtitle',
            
            // Quality section
            '#quality h2': 'quality_title', 
            '#quality .section-header p': 'quality_subtitle',
            
            // Management section
            '#management h2': 'management_title',
            '#management .section-header p': 'management_subtitle',
            
            // Equipment section
            '#equipment h2': 'equipment_title',
            '#equipment .section-header p': 'equipment_subtitle',
            
            // Products section
            '#products h2': 'products_title',
            '#products .section-header p': 'products_subtitle',
            
            // Certificates section
            '#certificates h2': 'certificates_title',
            '#certificates .section-header p': 'certificates_subtitle',
            
            // Contact section
            '#contact h2': 'contact_title',
            '#contact .section-header p': 'contact_subtitle'
        };
        
        // Add missing data-key attributes
        Object.entries(elements).forEach(([selector, key]) => {
            const element = document.querySelector(selector);
            if (element && !element.getAttribute('data-key')) {
                element.setAttribute('data-key', key);
            }
        });
    }
}

// Initialize i18n when DOM is loaded and main script is ready
function initializeI18n() {
    if (typeof window.i18n !== 'undefined') {
        console.log('i18n already initialized');
        return;
    }
    
    // Wait a bit to ensure script.js has initialized
    setTimeout(() => {
        window.i18n = new I18nManager();
        console.log('Multi-language system initialized: English (EN) / Tiếng Việt (VI)');
    }, 50);
}

// Initialize immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeI18n);
} else {
    initializeI18n();
}

// Fallback initialization with longer delay
setTimeout(initializeI18n, 200);