/* ============================================
   நாகை நிலம் - Nagapattinam Land Portal
   Complete JavaScript
   ============================================ */

// ==================== DATA STORE ====================

/**
 * Taluk Data - All 4 taluks with their villages
 * Nagapattinam district actual administrative structure
 */
const talukData = {
    "Nagapattinam": {
        description: "District headquarters, coastal town with ancient temples and port",
        villages: [
            "Nagapattinam", "Akkaraipettai", "Kameswaram", "Koothur", "Poompuhar",
            "Keechankuppam", "Nambiyar Nagar", "Vannankulam", "Thirukkuvalai",
            "Palliyagudi", "Sembanarkoil", "Vanagiri", "Kadalur", "Pudhukudi",
            "Manjalmedu", "Nagore", "Sikkal", "Velayuthampalayam", "Thiruvengadu",
            "Piravam", "Korukkupet", "Ammanpettai", "Mangaimadam", "Elanthakudi",
            "Kollidam", "Thiruvalangadu", "Kodiyakkarai", "Vedaranyam Road",
            "Nagapattinam Port", "Ammaiyarkovil", "Thirunallar", "Vettakaranpatti",
            "Kilaiyur", "Pandaravilai", "Melasivapuri", "Keelasivapuri", "Seruthur",
            "Nagapattinam Rural", "Thirukkadaiyur", "Paravai", "Olaikadu",
            "Poompuhar Beach", "Kaveripoompattinam", "Melaiyur", "Arasalar",
            "Pannai", "Koradacheri Road", "Thalainayar", "Nachiyarkovil",
            "Alangudi", "Pandaravadai", "Puduvayal", "Karaimedu"
        ]
    },
    "Kilvelur": {
        description: "Agricultural hub with fertile Cauvery delta lands",
        villages: [
            "Kilvelur", "Koradacheri", "Thirucherai", "Kivalur", "Nachiyarkovil",
            "Pandaravadai", "Puduvayal", "Thirupugazhur", "Kizhvelur", "Maruthur",
            "Vilangulam", "Poovalur", "Kadambadi", "Alakudi", "Kumbakonam Road",
            "Thiruvalampozhil", "Pazhaiyur", "Sembianur", "Needamangalam",
            "Manalmelkudi", "Thiruneelakandi", "Kodiyakkarai Road", "Vettar",
            "Kondviduthy", "Pallathur", "Kuruvikarambai", "Pandakudi",
            "Koothanur", "Melaalangudi", "Keelaalangudi", "Sembianmahadevi",
            "Valangaiman", "Papanasam Road", "Thirunageswaram", "Kumbakonam",
            "Aduthurai", "Thiruvidaimarudur", "Swamimalai", "Darasuram",
            "Thirubuvanam", "Koradacheri East", "Koradacheri West", "Kilvelur East",
            "Kilvelur West", "Pudhukkadai", "Karuvalarcheri", "Kothangudi",
            "Nattrasankottai", "Vadakur", "Nannilam", "Thirunaraiyur",
            "Elavanasur", "Koothalam", "Punnaivanam", "Annamangalam"
        ]
    },
    "Thirumarugal": {
        description: "Rich cultural heritage with ancient Shiva temples",
        villages: [
            "Thirumarugal", "Nannilam", "Thiruvidaimarudur", "Koothalam",
            "Thirunageswaram", "Pazhaiyur", "Kadambadi", "Alakudi", "Sembanarkoil",
            "Thirupunavasal", "Manalmelkudi", "Kumbakonam", "Papanasam",
            "Thirukkadaiyur", "Thirunallar", "Needamangalam", "Valangaiman",
            "Thiruvalampozhil", "Koradacheri", "Sembianur", "Vilangulam",
            "Maruthur", "Poovalur", "Thirupugazhur", "Kizhvelur", "Kivalur",
            "Pallathur", "Pandakudi", "Kuruvikarambai", "Kondviduthy",
            "Kothangudi", "Nattrasankottai", "Vadakur", "Karuvalarcheri",
            "Annamangalam", "Punnaivanam", "Elavanasur", "Thirunaraiyur",
            "Koothanur", "Melaalangudi", "Keelaalangudi", "Sembianmahadevi",
            "Thirubuvanam", "Darasuram", "Swamimalai", "Aduthurai",
            "Pudhukkadai", "Kilvelur East", "Kilvelur West", "Koradacheri East",
            "Koradacheri West", "Thiruneelakandi", "Manalmelkudi East",
            "Thalainayar", "Pannai", "Arasalar", "Melaiyur"
        ]
    },
    "Vedaranyam": {
        description: "Coastal taluk with salt pans, wetlands and bird sanctuary",
        villages: [
            "Vedaranyam", "Kodiyakkarai", "Thalainayar", "Pathirakaliamman",
            "Ayyampettai", "Agasthiyanpalli", "Vedaranyam Town", "Kodiyakkarai East",
            "Kodiyakkarai West", "Point Calimere", "Muthupettai", "Puliyankandam",
            "Thopputhurai", "Ammapattinam", "Kariyapattinam", "Servaikaranmadam",
            "Nagooran", "Thennangudi", "Sundarapandianpatnam", "Pazhaverkadu",
            "Vellapallam", "Koraikadu", "Mangalam", "Pudupattinam",
            "Kaliyankadu", "Chithirangudi", "Pannaiyur", "Narikudi",
            "Vedaranyam Coastal", "Ramnad Road", "Muthukumaranpattinam",
            "Kadambadi Coastal", "Keezhaiyur", "Melaiyur Coastal",
            "Poompuhar Coastal", "Nagapattinam Coastal East", "Adirampattinam",
            "Mannargudi Road", "Muthupet Road", "Sethubhavachatram",
            "Thiruppunavasal", "Vilundamavadi", "Palaiyur", "Kathiramangalam",
            "Aalankulam", "Poothurai", "Nambiyar Nagar East", "Kameswaram Coastal",
            "Akkaraipettai Coastal", "Keechankuppam Coastal", "Koothur Coastal",
            "Vannankulam Coastal", "Palliyagudi Coastal", "Kadalur Coastal",
            "Pudhukudi Coastal", "Manjalmedu Coastal", "Elanthakudi Coastal"
        ]
    }
};

/**
 * Land Type Definitions
 * Bilingual labels with color coding
 */
const landTypes = {
    agricultural: { label: "விவசாய நிலம்", en: "Agricultural Land", color: "#22c55e" },
    residential:  { label: "குடியிருப்பு மனை", en: "Residential Plot", color: "#3b82f6" },
    commercial:   { label: "வணிக நிலம்", en: "Commercial Land", color: "#f59e0b" },
    industrial:   { label: "தொழில் நிலம்", en: "Industrial Land", color: "#8b5cf6" },
    house:        { label: "வீடு மனை", en: "House with Land", color: "#ef4444" },
    farmhouse:    { label: "பண்ணை வீடு", en: "Farm House", color: "#06b6d4" }
};

/**
 * Road Access Labels
 */
const roadLabels = {
    "tar-road":    "Tar Road",
    "gravel-road": "Gravel Road",
    "no-road":     "No Road Access"
};

/**
 * Water Source Labels
 */
const waterLabels = {
    "borewell": "Borewell",
    "well":     "Open Well",
    "canal":    "Canal",
    "river":    "River",
    "none":     "None"
};

/**
 * Sample Property Listings Database
 * Realistic data for Nagapattinam district
 */
let properties = [
    {
        id: 1,
        name: "Murugan",
        phone: "9876543210",
        taluk: "Nagapattinam",
        village: "Poompuhar",
        type: "agricultural",
        area: 200,
        price: 800000,
        road: "tar-road",
        water: "canal",
        desc: "Cauvery river nearby. Fertile land suitable for paddy cultivation. Clear title with patta available. Two crops per year possible. Survey No: 45/2.",
        survey: "45/2",
        date: "2025-01-15",
        img: "paddy-field-green"
    },
    {
        id: 2,
        name: "Kumar",
        phone: "9876543211",
        taluk: "Nagapattinam",
        village: "Nagore",
        type: "residential",
        area: 30,
        price: 1500000,
        road: "tar-road",
        water: "borewell",
        desc: "SBT Road facing residential plot. Near school and hospital. Approved layout. Ready to construct. All documents clear.",
        survey: "120/1",
        date: "2025-01-14",
        img: "residential-plot-land"
    },
    {
        id: 3,
        name: "Selvam",
        phone: "9876543212",
        taluk: "Kilvelur",
        village: "Koradacheri",
        type: "agricultural",
        area: 500,
        price: 2000000,
        road: "gravel-road",
        water: "well",
        desc: "Large agricultural land with open well. Two crops per year - paddy and sugarcane. Near Cauvery branch canal. Patta available.",
        survey: "78/3",
        date: "2025-01-13",
        img: "farm-land-aerial"
    },
    {
        id: 4,
        name: "Raju",
        phone: "9876543213",
        taluk: "Vedaranyam",
        village: "Kodiyakkarai",
        type: "agricultural",
        area: 300,
        price: 900000,
        road: "gravel-road",
        water: "canal",
        desc: "Coastal area agricultural land. Salt-tolerant crops suitable. Near Point Calimere bird sanctuary. Good long-term investment opportunity.",
        survey: "22/1",
        date: "2025-01-12",
        img: "coastal-farm-land"
    },
    {
        id: 5,
        name: "Lakshmi",
        phone: "9876543214",
        taluk: "Thirumarugal",
        village: "Nannilam",
        type: "residential",
        area: 20,
        price: 1200000,
        road: "tar-road",
        water: "borewell",
        desc: "Town area residential plot. Main road facing. All facilities available - school, hospital, market nearby. Near bus stand.",
        survey: "256/4",
        date: "2025-01-11",
        img: "town-plot-land"
    },
    {
        id: 6,
        name: "Vijay",
        phone: "9876543215",
        taluk: "Nagapattinam",
        village: "Akkaraipettai",
        type: "commercial",
        area: 50,
        price: 5000000,
        road: "tar-road",
        water: "borewell",
        desc: "NH 32 road facing commercial land. Ideal for shops, godowns, petrol bunk. High traffic area. Premium location.",
        survey: "89/5",
        date: "2025-01-10",
        img: "commercial-highway-land"
    },
    {
        id: 7,
        name: "Devi",
        phone: "9876543216",
        taluk: "Kilvelur",
        village: "Thirucherai",
        type: "house",
        area: 15,
        price: 2500000,
        road: "tar-road",
        water: "borewell",
        desc: "2BHK house with 15 cents land. Newly built with modern amenities. Car parking space. Near famous Sarangapani temple area.",
        survey: "145/2",
        date: "2025-01-09",
        img: "house-tamil-nadu"
    },
    {
        id: 8,
        name: "Ramesh",
        phone: "9876543217",
        taluk: "Vedaranyam",
        village: "Vedaranyam",
        type: "residential",
        area: 40,
        price: 800000,
        road: "tar-road",
        water: "well",
        desc: "Vedaranyam town residential plot. Near market and bus stand. Budget friendly. Good for investment. Patta land.",
        survey: "310/1",
        date: "2025-01-08",
        img: "town-land-plot"
    },
    {
        id: 9,
        name: "Anbu",
        phone: "9876543218",
        taluk: "Thirumarugal",
        village: "Thirumarugal",
        type: "agricultural",
        area: 150,
        price: 600000,
        road: "tar-road",
        water: "canal",
        desc: "Fertile delta land with canal water. Paddy and sugarcane cultivation. Road frontage on both sides. Clear documents.",
        survey: "67/3",
        date: "2025-01-07",
        img: "green-paddy-field"
    },
    {
        id: 10,
        name: "Priya",
        phone: "9876543219",
        taluk: "Nagapattinam",
        village: "Kameswaram",
        type: "farmhouse",
        area: 100,
        price: 3500000,
        road: "tar-road",
        water: "borewell",
        desc: "Farm house with 50+ coconut trees and 20+ mango trees. Borewell with motor. Full fence compound. Peaceful area near coast.",
        survey: "98/2",
        date: "2025-01-06",
        img: "farmhouse-coconut-trees"
    },
    {
        id: 11,
        name: "Senthil",
        phone: "9876543220",
        taluk: "Kilvelur",
        village: "Needamangalam",
        type: "agricultural",
        area: 250,
        price: 1200000,
        road: "gravel-road",
        water: "well",
        desc: "Very fertile land with two open wells. Cashew and paddy cultivated successfully. Near main road. Clear patta land.",
        survey: "56/1",
        date: "2025-01-05",
        img: "agricultural-land-trees"
    },
    {
        id: 12,
        name: "Meena",
        phone: "9876543221",
        taluk: "Vedaranyam",
        village: "Muthupettai",
        type: "agricultural",
        area: 400,
        price: 1000000,
        road: "no-road",
        water: "canal",
        desc: "Large wetland near Muthupettai lagoon. Shrimp farming potential. Low price per cent. Long term investment opportunity.",
        survey: "33/4",
        date: "2025-01-04",
        img: "wetland-aerial-view"
    },
    {
        id: 13,
        name: "Karthik",
        phone: "9876543222",
        taluk: "Nagapattinam",
        village: "Sikkal",
        type: "residential",
        area: 25,
        price: 1800000,
        road: "tar-road",
        water: "borewell",
        desc: "Near famous Sikkal Singaravelan temple. Well-developed residential area. Schools, shops, hospitals nearby.",
        survey: "178/3",
        date: "2025-01-03",
        img: "temple-town-plot"
    },
    {
        id: 14,
        name: "Bharathi",
        phone: "9876543223",
        taluk: "Thirumarugal",
        village: "Thiruvidaimarudur",
        type: "commercial",
        area: 35,
        price: 3000000,
        road: "tar-road",
        water: "borewell",
        desc: "Temple town commercial land. High tourist footfall. Good for hotel, lodge, shopping complex, restaurant.",
        survey: "201/2",
        date: "2025-01-02",
        img: "temple-commercial-land"
    },
    {
        id: 15,
        name: "Ganesh",
        phone: "9876543224",
        taluk: "Kilvelur",
        village: "Kilvelur",
        type: "house",
        area: 10,
        price: 1800000,
        road: "tar-road",
        water: "borewell",
        desc: "Newly constructed 3BHK house with modern amenities. Kilvelur town center. Immediate sale. Registration ready.",
        survey: "89/1",
        date: "2025-01-01",
        img: "modern-house-india"
    },
    {
        id: 16,
        name: "Saranya",
        phone: "9876543225",
        taluk: "Nagapattinam",
        village: "Thirukkuvalai",
        type: "agricultural",
        area: 180,
        price: 450000,
        road: "gravel-road",
        water: "canal",
        desc: "Budget agricultural land in Cauvery delta. Good soil quality. Patta available. Urgent sale - price negotiable.",
        survey: "112/3",
        date: "2024-12-30",
        img: "delta-farm-land"
    },
    {
        id: 17,
        name: "Murugan",
        phone: "9876543226",
        taluk: "Vedaranyam",
        village: "Thalainayar",
        type: "agricultural",
        area: 350,
        price: 700000,
        road: "gravel-road",
        water: "river",
        desc: "Near Kaveri river branch. Excellent for paddy cultivation. Two sides road access. Very fertile black soil.",
        survey: "44/2",
        date: "2024-12-28",
        img: "river-bank-farm"
    },
    {
        id: 18,
        name: "Dinesh",
        phone: "9876543227",
        taluk: "Thirumarugal",
        village: "Koothalam",
        type: "residential",
        area: 18,
        price: 650000,
        road: "tar-road",
        water: "well",
        desc: "Village residential plot. Budget friendly. Water facility available. Quiet and peaceful area. Good for house construction.",
        survey: "267/1",
        date: "2024-12-25",
        img: "village-residential-plot"
    }
];

/** Auto-increment ID for new properties */
let nextId = 19;

/** Currently selected taluk in the villages section */
let selectedVillageTaluk = "Nagapattinam";


// ==================== UTILITY FUNCTIONS ====================

/**
 * Format price to readable Indian format
 * Examples: 800000 → "₹8.00 L", 50000000 → "₹5.00 Cr"
 * @param {number} num - Price in rupees
 * @returns {string} Formatted price string
 */
function formatPrice(num) {
    if (num >= 10000000) {
        return "₹" + (num / 10000000).toFixed(2) + " Cr";
    }
    if (num >= 100000) {
        return "₹" + (num / 100000).toFixed(2) + " L";
    }
    return "₹" + num.toLocaleString("en-IN");
}

/**
 * Format price with full number (no abbreviation)
 * @param {number} num - Price in rupees
 * @returns {string} Full formatted price
 */
function formatPriceFull(num) {
    return "₹" + num.toLocaleString("en-IN");
}

/**
 * Get land type info (label, english name, color)
 * @param {string} type - Land type key
 * @returns {object} Type info object
 */
function getTypeInfo(type) {
    return landTypes[type] || { label: type, en: type, color: "#888888" };
}

/**
 * Generate image URL using Picsum Photos
 * @param {string} seed - Unique seed string
 * @param {number} w - Width
 * @param {number} h - Height
 * @returns {string} Image URL
 */
function getImgUrl(seed, w, h) {
    return "https://picsum.photos/seed/" + seed + "/" + w + "/" + h + ".jpg";
}

/**
 * Calculate area in different units from cents
 * @param {number} cents - Area in cents
 * @returns {object} Area in various units
 */
function calculateArea(cents) {
    return {
        cents: cents,
        sqMeters: Math.round(cents * 40.47),
        sqFeet: Math.round(cents * 435.6),
        acres: (cents / 100).toFixed(2),
        hectares: (cents * 0.004047).toFixed(4)
    };
}

/**
 * Get relative time string from date
 * @param {string} dateStr - ISO date string
 * @returns {string} Relative time like "2 days ago"
 */
function timeAgo(dateStr) {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return diffDays + " days ago";
    if (diffDays < 30) return Math.floor(diffDays / 7) + " weeks ago";
    if (diffDays < 365) return Math.floor(diffDays / 30) + " months ago";
    return Math.floor(diffDays / 365) + " years ago";
}

/**
 * Validate Indian phone number
 * @param {string} phone - Phone number string
 * @returns {boolean} Is valid
 */
function isValidPhone(phone) {
    var cleaned = phone.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(cleaned) || cleaned.length === 12;
}


// ==================== TOAST NOTIFICATION SYSTEM ====================

/**
 * Show a toast notification
 * @param {string} message - Message to display
 * @param {string} type - "success" | "error" | "info"
 * @param {number} duration - Display duration in ms
 */
function showToast(message, type, duration) {
    type = type || "success";
    duration = duration || 3500;

    var container = document.getElementById("toastContainer");
    if (!container) return;

    var toast = document.createElement("div");

    var colorMap = {
        success: { border: "rgba(0,255,196,0.3)", bg: "rgba(0,255,196,0.1)", icon: "check-circle", color: "#00ffc4" },
        error:   { border: "rgba(239,68,68,0.3)", bg: "rgba(239,68,68,0.1)", icon: "alert-circle", color: "#ef4444" },
        info:    { border: "rgba(96,165,250,0.3)", bg: "rgba(96,165,250,0.1)", icon: "info", color: "#60a5fa" }
    };

    var c = colorMap[type] || colorMap.info;

    toast.className = "toast";
    toast.style.borderColor = c.border;
    toast.style.background = c.bg;
    toast.innerHTML =
        '<i data-lucide="' + c.icon + '" class="toast-icon" style="color:' + c.color + '"></i>' +
        '<span class="toast-message">' + message + "</span>";

    container.appendChild(toast);

    // Re-initialize Lucide icons for the new toast
    if (window.lucide) {
        lucide.createIcons({ nodes: [toast] });
    }

    // Auto-remove with fade-out animation
    setTimeout(function () {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(100px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(function () {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, duration);
}


// ==================== NAVIGATION SYSTEM ====================

/**
 * Show a specific section and hide all others
 * @param {string} name - Section name (home, listings, villages, contact)
 */
function showSection(name) {
    // Hide all sections
    var sections = document.querySelectorAll("[id^='section-']");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add("hidden");
    }

    // Show target section
    var target = document.getElementById("section-" + name);
    if (target) {
        target.classList.remove("hidden");
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Trigger section-specific rendering
    if (name === "listings") {
        renderListings();
    }
    if (name === "villages") {
        renderVillagesSection();
    }

    // Update active nav state (visual only)
    updateNavActiveState(name);
}

/**
 * Update navigation active state visually
 * @param {string} activeSection - Currently active section
 */
function updateNavActiveState(activeSection) {
    var navLinks = document.querySelectorAll(".nav-link");
    var sectionMap = {
        home: 0,
        listings: 1,
        villages: 2,
        contact: 4
    };

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = "";
    }

    var idx = sectionMap[activeSection];
    if (idx !== undefined && navLinks[idx]) {
        navLinks[idx].style.color = "#00ffc4";
    }
}

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
    var menu = document.getElementById("mobileMenu");
    if (menu) {
        menu.classList.toggle("hidden");
    }
}


// ==================== MODAL SYSTEM ====================

/**
 * Open a modal by name
 * @param {string} name - Modal identifier
 */
function openModal(name) {
    var modal = document.getElementById("modal-" + name);
    if (modal) {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }

    // Special initialization for specific modals
    if (name === "addProperty") {
        populatePropertyForm();
    }
}

/**
 * Close a modal by name
 * @param {string} name - Modal identifier
 */
function closeModal(name) {
    var modal = document.getElementById("modal-" + name);
    if (modal) {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    }
}

/**
 * Close modal when clicking on overlay background
 * Attached via event listener in init()
 */
function handleOverlayClick(e) {
    if (e.target.classList.contains("modal-overlay")) {
        e.target.classList.add("hidden");
        document.body.style.overflow = "";
    }
}

/**
 * Close modal on Escape key press
 * @param {KeyboardEvent} e
 */
function handleEscapeKey(e) {
    if (e.key === "Escape") {
        var modals = document.querySelectorAll(".modal-overlay:not(.hidden)");
        for (var i = 0; i < modals.length; i++) {
            modals[i].classList.add("hidden");
        }
        document.body.style.overflow = "";
    }
}


// ==================== DROPDOWN POPULATION ====================

/**
 * Populate all taluk and village dropdowns on the page
 */
function populateDropdowns() {
    var taluks = Object.keys(talukData);

    // 1. Hero Search - Taluk dropdown
    var searchTaluk = document.getElementById("searchTaluk");
    if (searchTaluk) {
        for (var i = 0; i < taluks.length; i++) {
            var opt = document.createElement("option");
            opt.value = taluks[i];
            opt.textContent = taluks[i];
            searchTaluk.appendChild(opt);
        }
    }

    // 2. Listings Filter - Taluk dropdown
    var filterTaluk = document.getElementById("filterTaluk");
    if (filterTaluk) {
        for (var i = 0; i < taluks.length; i++) {
            var opt = document.createElement("option");
            opt.value = taluks[i];
            opt.textContent = taluks[i];
            filterTaluk.appendChild(opt);
        }
    }

    // 3. Add Property Form - Taluk dropdown
    var propTaluk = document.getElementById("propTaluk");
    if (propTaluk) {
        for (var i = 0; i < taluks.length; i++) {
            var opt = document.createElement("option");
            opt.value = taluks[i];
            opt.textContent = taluks[i];
            propTaluk.appendChild(opt);
        }
    }

    // 4. Footer - Taluk links
    var footer = document.getElementById("footerTaluks");
    if (footer) {
        for (var i = 0; i < taluks.length; i++) {
            var t = taluks[i];
            var count = talukData[t].villages.length;
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.href = "#";
            a.textContent = t + " (" + count + " villages)";
            a.className = "footer-link";
            a.setAttribute("onclick", "filterByTaluk('" + t + "');showSection('listings')");
            li.appendChild(a);
            footer.appendChild(li);
        }
    }
}

/**
 * Update village dropdown based on selected taluk (Hero Search)
 */
function updateVillages() {
    var taluk = document.getElementById("searchTaluk").value;
    var villageSelect = document.getElementById("searchVillage");
    if (!villageSelect) return;

    // Clear existing options
    villageSelect.innerHTML = '<option value="">All Villages</option>';

    if (taluk && talukData[taluk]) {
        var villages = talukData[taluk].villages;
        for (var i = 0; i < villages.length; i++) {
            var opt = document.createElement("option");
            opt.value = villages[i];
            opt.textContent = villages[i];
            villageSelect.appendChild(opt);
        }
    }
}

/**
 * Update village dropdown based on selected taluk (Listings Filter)
 */
function updateFilterVillages() {
    var taluk = document.getElementById("filterTaluk").value;
    var villageSelect = document.getElementById("filterVillage");
    if (!villageSelect) return;

    villageSelect.innerHTML = '<option value="">All</option>';

    if (taluk && talukData[taluk]) {
        var villages = talukData[taluk].villages;
        for (var i = 0; i < villages.length; i++) {
            var opt = document.createElement("option");
            opt.value = villages[i];
            opt.textContent = villages[i];
            villageSelect.appendChild(opt);
        }
    }
}

/**
 * Update village dropdown based on selected taluk (Add Property Form)
 */
function updatePropVillages() {
    var taluk = document.getElementById("propTaluk").value;
    var villageSelect = document.getElementById("propVillage");
    if (!villageSelect) return;

    villageSelect.innerHTML = '<option value="">Select Village</option>';

    if (taluk && talukData[taluk]) {
        var villages = talukData[taluk].villages;
        for (var i = 0; i < villages.length; i++) {
            var opt = document.createElement("option");
            opt.value = villages[i];
            opt.textContent = villages[i];
            villageSelect.appendChild(opt);
        }
    }
}

/**
 * Populate property form (called when modal opens)
 */
function populatePropertyForm() {
    updatePropVillages();
}


// ==================== PROPERTY CARD RENDERING ====================

/**
 * Create HTML for a property card
 * @param {object} prop - Property object
 * @param {boolean} featured - Whether this is a featured card
 * @returns {string} HTML string
 */
function createPropertyCard(prop, featured) {
    var typeInfo = getTypeInfo(prop.type);
    var imgUrl = getImgUrl(prop.img || "land-default-" + prop.id, 600, 400);
    var pricePerCent = prop.area > 0 ? Math.round(prop.price / prop.area) : 0;
    var areaUnits = calculateArea(prop.area);

    var urgentTag = "";
    if (prop.price < 500000) {
        urgentTag = '<span class="property-tag status-urgent">அவசரம்</span>';
    }

    var html = "" +
        '<div class="property-card" onclick="openPropertyDetail(' + prop.id + ')">' +
        '  <div class="property-card-image">' +
        '    <img src="' + imgUrl + '" alt="' + prop.village + " " + typeInfo.en + '" loading="lazy">' +
        '    <div class="img-overlay"></div>' +
        '    <div class="property-card-tags">' +
        '      <span class="property-tag" style="background:' + typeInfo.color + "20;color:" + typeInfo.color + '">' + typeInfo.label + "</span>" +
             urgentTag +
        "    </div>" +
        '    <div class="property-card-price-area">' +
        '      <div class="property-card-price">' + formatPrice(prop.price) + "</div>" +
        '      <div class="property-card-price-per-cent">' + formatPriceFull(pricePerCent) + " per cent</div>" +
        "    </div>" +
        "  </div>" +
        '  <div class="property-card-body">' +
        '    <h3 class="property-card-title">' + prop.village + ", " + prop.taluk + "</h3>" +
        '    <p class="property-card-desc">' + prop.desc + "</p>" +
        '    <div class="property-card-footer">' +
        '      <div class="property-card-meta">' +
        '        <span class="property-card-meta-item">' +
        '          <i data-lucide="maximize-2" style="width:14px;height:14px"></i> ' + prop.area + " cents" +
        "        </span>" +
        '        <span class="property-card-meta-item">' +
        '          <i data-lucide="map-pin" style="width:14px;height:14px"></i> ' + prop.taluk +
        "        </span>" +
        "      </div>" +
        '      <div class="property-card-arrow">' +
        '        <i data-lucide="arrow-right" style="width:14px;height:14px"></i>' +
        "      </div>" +
        "    </div>" +
        "  </div>" +
        "</div>";

    return html;
}


// ==================== FEATURED GRID ====================

/**
 * Render the featured properties grid on the home page
 */
function renderFeatured() {
    var grid = document.getElementById("featuredGrid");
    if (!grid) return;

    var featured = properties.slice(0, 6);
    var html = "";

    for (var i = 0; i < featured.length; i++) {
        html += createPropertyCard(featured[i], true);
    }

    grid.innerHTML = html;

    // Re-initialize Lucide icons in the new content
    if (window.lucide) {
        lucide.createIcons({ nodes: [grid] });
    }
}


// ==================== TALUKS GRID ====================

/**
 * Render the taluks overview grid on the home page
 */
function renderTaluks() {
    var grid = document.getElementById("taluksGrid");
    if (!grid) return;

    var taluks = Object.keys(talukData);
    var icons = ["landmark", "wheat", "temple", "waves"];
    var images = ["nagapattinam-temple-coast", "kilvelur-green-farm", "thirumarugal-ancient-temple", "vedaranyam-salt-pan"];
    var colors = ["#00ffc4", "#22c55e", "#f59e0b", "#06b6d4"];

    var html = "";

    for (var i = 0; i < taluks.length; i++) {
        var taluk = taluks[i];
        var data = talukData[taluk];
        var propCount = 0;

        // Count properties in this taluk
        for (var j = 0; j < properties.length; j++) {
            if (properties[j].taluk === taluk) propCount++;
        }

        html += "" +
            '<div class="taluk-card" onclick="filterByTaluk(\'' + taluk + '\');showSection(\'listings\')">' +
            '  <div class="taluk-card-bg">' +
            '    <img src="' + getImgUrl(images[i], 500, 400) + '" loading="lazy" alt="' + taluk + '">' +
            '    <div class="taluk-card-bg-overlay"></div>' +
            "  </div>" +
            '  <div class="taluk-card-content">' +
            '    <div class="taluk-card-icon" style="background:' + colors[i] + "15;border:1px solid " + colors[i] + "30\">" +
            '      <i data-lucide="' + icons[i] + '" style="width:24px;height:24px;color:' + colors[i] + '"></i>' +
            "    </div>" +
            '    <h3 class="taluk-card-name">' + taluk + "</h3>" +
            '    <p class="taluk-card-desc">' + data.description + "</p>" +
            '    <div class="taluk-card-stats">' +
            '      <span><strong>' + data.villages.length + "</strong> villages</span>" +
            '      <span><strong>' + propCount + "</strong> listings</span>" +
            "    </div>" +
            "  </div>" +
            "</div>";
    }

    grid.innerHTML = html;

    if (window.lucide) {
        lucide.createIcons({ nodes: [grid] });
    }
}


// ==================== ALL LISTINGS ====================

/**
 * Get filtered and sorted properties based on current filter state
 * @returns {Array} Filtered properties array
 */
function getFilteredProperties() {
    var filtered = properties.slice(); // shallow copy

    var taluk = document.getElementById("filterTaluk");
    var village = document.getElementById("filterVillage");
    var type = document.getElementById("filterType");
    var minPriceEl = document.getElementById("filterMinPrice");
    var maxPriceEl = document.getElementById("filterMaxPrice");

    var talukVal = taluk ? taluk.value : "";
    var villageVal = village ? village.value : "";
    var typeVal = type ? type.value : "";
    var minPrice = minPriceEl ? (parseInt(minPriceEl.value) || 0) : 0;
    var maxPrice = maxPriceEl ? (parseInt(maxPriceEl.value) || Infinity) : Infinity;

    // Apply filters
    if (talukVal) {
        filtered = filtered.filter(function (p) { return p.taluk === talukVal; });
    }
    if (villageVal) {
        filtered = filtered.filter(function (p) { return p.village === villageVal; });
    }
    if (typeVal) {
        filtered = filtered.filter(function (p) { return p.type === typeVal; });
    }
    filtered = filtered.filter(function (p) { return p.price >= minPrice && p.price <= maxPrice; });

    // Apply sorting
    var sortEl = document.getElementById("sortOrder");
    var sortVal = sortEl ? sortEl.value : "newest";

    switch (sortVal) {
        case "newest":
            filtered.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
            break;
        case "price-low":
            filtered.sort(function (a, b) { return a.price - b.price; });
            break;
        case "price-high":
            filtered.sort(function (a, b) { return b.price - a.price; });
            break;
        case "area-large":
            filtered.sort(function (a, b) { return b.area - a.area; });
            break;
    }

    return filtered;
}

/**
 * Render the all-listings grid with current filters
 */
function renderListings() {
    var filtered = getFilteredProperties();
    var grid = document.getElementById("allListingsGrid");
    var noResults = document.getElementById("noResults");
    var countEl = document.getElementById("listingCount");

    if (!grid) return;

    // Update count
    if (countEl) {
        countEl.textContent = filtered.length + " properties found";
    }

    // Handle empty state
    if (filtered.length === 0) {
        grid.innerHTML = "";
        if (noResults) noResults.classList.remove("hidden");
        return;
    }

    if (noResults) noResults.classList.add("hidden");

    // Build cards HTML
    var html = "";
    for (var i = 0; i < filtered.length; i++) {
        html += createPropertyCard(filtered[i], false);
    }

    grid.innerHTML = html;

    if (window.lucide) {
        lucide.createIcons({ nodes: [grid] });
    }
}

/**
 * Trigger re-filter (called by filter dropdowns)
 */
function filterListings() {
    renderListings();
}

/**
 * Clear all filter inputs and re-render
 */
function clearFilters() {
    var filterTaluk = document.getElementById("filterTaluk");
    var filterVillage = document.getElementById("filterVillage");
    var filterType = document.getElementById("filterType");
    var filterMinPrice = document.getElementById("filterMinPrice");
    var filterMaxPrice = document.getElementById("filterMaxPrice");
    var sortOrder = document.getElementById("sortOrder");

    if (filterTaluk) filterTaluk.value = "";
    if (filterVillage) filterVillage.innerHTML = '<option value="">All</option>';
    if (filterType) filterType.value = "";
    if (filterMinPrice) filterMinPrice.value = "";
    if (filterMaxPrice) filterMaxPrice.value = "";
    if (sortOrder) sortOrder.value = "newest";

    renderListings();
}

/**
 * Filter listings by a specific taluk (from taluk cards)
 * @param {string} taluk - Taluk name
 */
function filterByTaluk(taluk) {
    showSection("listings");

    var filterTaluk = document.getElementById("filterTaluk");
    if (filterTaluk) {
        filterTaluk.value = taluk;
    }

    updateFilterVillages();

    // Use setTimeout to allow village dropdown to populate
    setTimeout(function () {
        renderListings();
    }, 50);
}

/**
 * Execute search from hero search box
 */
function searchProperties() {
    showSection("listings");

    var taluk = document.getElementById("searchTaluk").value;
    var village = document.getElementById("searchVillage").value;
    var type = document.getElementById("searchType").value;

    var filterTaluk = document.getElementById("filterTaluk");
    var filterType = document.getElementById("filterType");

    if (filterTaluk) filterTaluk.value = taluk;
    updateFilterVillages();

    setTimeout(function () {
        var filterVillage = document.getElementById("filterVillage");
        if (filterVillage) filterVillage.value = village;
        if (filterType) filterType.value = type;
        renderListings();
    }, 100);
}

/**
 * Quick search by type or price range
 * @param {string} type - Search type key
 */
function quickSearch(type) {
    showSection("listings");

    var filterTaluk = document.getElementById("filterTaluk");
    var filterVillage = document.getElementById("filterVillage");
    var filterType = document.getElementById("filterType");
    var filterMinPrice = document.getElementById("filterMinPrice");
    var filterMaxPrice = document.getElementById("filterMaxPrice");

    if (filterTaluk) filterTaluk.value = "";
    if (filterVillage) filterVillage.innerHTML = '<option value="">All</option>';

    if (type === "under5L") {
        if (filterType) filterType.value = "";
        if (filterMinPrice) filterMinPrice.value = "0";
        if (filterMaxPrice) filterMaxPrice.value = "500000";
    } else {
        if (filterType) filterType.value = type;
        if (filterMinPrice) filterMinPrice.value = "";
        if (filterMaxPrice) filterMaxPrice.value = "";
    }

    renderListings();
}


// ==================== PROPERTY DETAIL MODAL ====================

/**
 * Open property detail modal with full information
 * @param {number} id - Property ID
 */
function openPropertyDetail(id) {
    var prop = null;
    for (var i = 0; i < properties.length; i++) {
        if (properties[i].id === id) {
            prop = properties[i];
            break;
        }
    }
    if (!prop) return;

    var typeInfo = getTypeInfo(prop.type);
    var pricePerCent = prop.area > 0 ? Math.round(prop.price / prop.area) : 0;
    var imgUrl = getImgUrl(prop.img || "land-detail-" + prop.id, 800, 500);
    var area = calculateArea(prop.area);
    var roadLabel = roadLabels[prop.road] || "N/A";
    var waterLabel = waterLabels[prop.water] || "N/A";
    var postedDate = new Date(prop.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

    var surveyHtml = "";
    if (prop.survey) {
        surveyHtml = "" +
            '<div class="detail-info-chip">' +
            '  <i data-lucide="file-search" style="width:16px;height:16px"></i>' +
            "  <div>" +
            '    <div class="detail-info-label">Survey No.</div>' +
            '    <div class="detail-info-value">' + prop.survey + "</div>" +
            "  </div>" +
            "</div>";
    }

    var html = "" +
        '<div class="detail-image">' +
        '  <img src="' + imgUrl + '" alt="' + prop.village + '">' +
        '  <div class="img-overlay"></div>' +
        '  <button onclick="closeModal(\'propertyDetail\')" class="detail-image-close">' +
        '    <i data-lucide="x" style="width:20px;height:20px"></i>' +
        "  </button>" +
        '  <div style="position:absolute;bottom:1rem;left:1rem;display:flex;gap:0.5rem;z-index:2">' +
        '    <span class="property-tag" style="background:' + typeInfo.color + "20;color:" + typeInfo.color + ";padding:0.375rem 0.75rem;border-radius:0.5rem\">" + typeInfo.label + "</span>" +
        "  </div>" +
        "</div>" +
        '<div class="modal-body">' +
        '  <div class="detail-header">' +
        "    <div>" +
        '      <h2 class="detail-title">' + prop.village + ", " + prop.taluk + "</h2>" +
        '      <p class="detail-location">' +
        '        <i data-lucide="map-pin" style="width:14px;height:14px"></i> ' +
        "        Nagapattinam District, Tamil Nadu" +
        "      </p>" +
        "    </div>" +
        "    <div>" +
        '      <div class="detail-price">' + formatPrice(prop.price) + "</div>" +
        '      <div class="detail-price-per">' + formatPriceFull(pricePerCent) + " per cent</div>" +
        "    </div>" +
        "  </div>" +

        '  <div class="detail-stats">' +
        '    <div class="detail-stat">' +
        '      <i data-lucide="maximize-2" class="detail-stat-icon"></i>' +
        '      <div class="detail-stat-value">' + prop.area + "</div>" +
        '      <div class="detail-stat-label">Cents</div>' +
        "    </div>" +
        '    <div class="detail-stat">' +
        '      <i data-lucide="ruler" class="detail-stat-icon"></i>' +
        '      <div class="detail-stat-value">' + area.sqMeters + "</div>" +
        '      <div class="detail-stat-label">Sq. Meters</div>' +
        "    </div>" +
        '    <div class="detail-stat">' +
        '      <i data-lucide="road" class="detail-stat-icon"></i>' +
        '      <div class="detail-stat-value" style="font-size:0.875rem">' + roadLabel + "</div>" +
        '      <div class="detail-stat-label">Road Access</div>' +
        "    </div>" +
        '    <div class="detail-stat">' +
        '      <i data-lucide="droplets" class="detail-stat-icon"></i>' +
        '      <div class="detail-stat-value" style="font-size:0.875rem">' + waterLabel + "</div>" +
        '      <div class="detail-stat-label">Water Source</div>' +
        "    </div>" +
        "  </div>" +

        '  <div class="detail-section">' +
        '    <h3 class="detail-section-title">' +
        '      <i data-lucide="file-text"></i> Description' +
        "    </h3>" +
        '    <p class="detail-text">' + prop.desc + "</p>" +
        "  </div>" +

        '  <div class="detail-section">' +
        '    <h3 class="detail-section-title">' +
        '      <i data-lucide="calculator"></i> Area Conversion' +
        "    </h3>" +
        '    <div class="detail-info-grid">' +
        '      <div class="detail-info-chip">' +
        '        <i data-lucide="square" style="width:16px;height:16px"></i>' +
        "        <div>" +
        '          <div class="detail-info-label">Square Feet</div>' +
        '          <div class="detail-info-value">' + area.sqFeet.toLocaleString("en-IN") + " sq.ft</div>' +
        "        </div>" +
        "      </div>" +
        '      <div class="detail-info-chip">' +
        '        <i data-lucide="grid-3x3" style="width:16px;height:16px"></i>' +
        "        <div>" +
        '          <div class="detail-info-label">Acres</div>' +
        '          <div class="detail-info-value">' + area.acres + " acres</div>' +
        "        </div>" +
        "      </div>" +
        "    </div>" +
        "  </div>" +

        '  <div class="detail-section">' +
        '    <h3 class="detail-section-title">' +
        '      <i data-lucide="file-check"></i> Document Details' +
        "    </h3>" +
        '    <div class="detail-info-grid">' +
             surveyHtml +
        '      <div class="detail-info-chip">' +
        '        <i data-lucide="calendar" style="width:16px;height:16px"></i>' +
        "        <div>" +
        '          <div class="detail-info-label">Posted On</div>' +
        '          <div class="detail-info-value">' + postedDate + " (" + timeAgo(prop.date) + ")</div>" +
        "        </div>" +
        "      </div>" +
        "    </div>" +
        "  </div>" +

        '  <div class="detail-owner-box">' +
        '    <div class="detail-owner-label">Owner Details</div>' +
        '    <div class="detail-owner-row">' +
        '      <div class="detail-owner-info">' +
        '        <div class="detail-owner-avatar">' +
        '          <i data-lucide="user" style="width:24px;height:24px"></i>' +
        "        </div>" +
        "        <div>" +
        '          <div class="detail-owner-name">' + prop.name + "</div>" +
        '          <div class="detail-owner-phone">' +
        '            <i data-lucide="phone" style="width:14px;height:14px"></i> ' + prop.phone +
        "          </div>" +
        "        </div>" +
        "      </div>" +
        '      <div class="detail-owner-actions">' +
        '        <a href="tel:' + prop.phone + '" class="btn-primary" style="padding:0.625rem 1.25rem;font-size:0.875rem;border-radius:0.5rem;text-decoration:none;display:inline-flex;align-items:center;gap:0.5rem;color:#fff;font-weight:600;background:linear-gradient(to right,#047857,#059669);box-shadow:0 0 25px rgba(4,120,87,0.4)">' +
        '          <i data-lucide="phone" style="width:16px;height:16px"></i> Call' +
        "        </a>" +
        '        <button onclick="closeModal(\'propertyDetail\');openInquiry(' + prop.id + ')" class="btn-inquiry">' +
        '          <i data-lucide="message-circle" style="width:16px;height:16px"></i> Inquiry' +
        "        </button>" +
        "      </div>" +
        "    </div>" +
        "  </div>" +

        '  <div class="detail-disclaimer">' +
        "    <strong>Disclaimer:</strong> இந்த விளம்பரம் தகவல் நோக்கத்திற்கு மட்டுமே. " +
        "நில வாங்கும் முன் நேரடியாக பார்வையிட்டு, ஆவணங்களை சரிபார்த்து வாங்கவும். " +
        "இணையதளம் எந்த பொறுப்பும் ஏற்றுக்கொள்ளாது. " +
        "This listing is for information only. Verify all documents and visit the land before purchasing." +
        "</div>" +
        "</div>";

    var content = document.getElementById("propertyDetailContent");
    if (content) {
        content.innerHTML = html;
    }

    openModal("propertyDetail");

    // Re-initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons({ nodes: [content] });
    }
}

/**
 * Open inquiry modal for a specific property
 * @param {number} propId - Property ID
 */
function openInquiry(propId) {
    var inquiryPropId = document.getElementById("inquiryPropId");
    if (inquiryPropId) {
        inquiryPropId.value = propId;
    }
    openModal("inquiry");
}


// ==================== VILLAGES SECTION ====================

/**
 * Render the villages browsing section
 */
function renderVillagesSection() {
    var tabsContainer = document.getElementById("villageTalukTabs");
    if (!tabsContainer) return;

    var taluks = Object.keys(talukData);
    var html = "";

    for (var i = 0; i < taluks.length; i++) {
        var t = taluks[i];
        var isActive = t === selectedVillageTaluk;
        var activeClass = isActive
            ? "active"
            : "";
        var activeStyle = isActive
            ? "border-color:#00ffc4;color:#00ffc4;background:rgba(0,255,196,0.05)"
            : "border-color:rgba(255,255,255,0.1);color:#a3a3a3";

        html += "" +
            '<button onclick="selectVillageTaluk(\'' + t + '\')" ' +
            'class="tab-btn ' + activeClass + '" ' +
            'style="' + activeStyle + '">' +
            t + ' <span style="font-size:0.75rem;opacity:0.6;margin-left:0.25rem">(' + talukData[t].villages.length + ")</span>" +
            "</button>";
    }

    tabsContainer.innerHTML = html;

    // Hide village properties panel
    var villageProps = document.getElementById("villageProperties");
    if (villageProps) {
        villageProps.classList.add("hidden");
    }

    renderVillageGrid();
}

/**
 * Select a taluk tab in the villages section
 * @param {string} taluk - Taluk name
 */
function selectVillageTaluk(taluk) {
    selectedVillageTaluk = taluk;

    // Hide village properties
    var villageProps = document.getElementById("villageProperties");
    if (villageProps) {
        villageProps.classList.add("hidden");
    }

    renderVillagesSection();
}

/**
 * Render the village chips grid for the selected taluk
 */
function renderVillageGrid() {
    var container = document.getElementById("villageListContainer");
    if (!container) return;

    var villages = talukData[selectedVillageTaluk].villages;
    var html = "";

    for (var i = 0; i < villages.length; i++) {
        var v = villages[i];
        var count = 0;
        for (var j = 0; j < properties.length; j++) {
            if (properties[j].village === v) count++;
        }

        html += "" +
            '<button onclick="selectVillage(\'' + v.replace(/'/g, "\\'") + '\')" class="village-chip">' +
            '  <div class="village-chip-name">' + v + "</div>" +
            '  <div class="village-chip-count">' + count + " listing" + (count !== 1 ? "s" : "") + "</div>" +
            "</button>";
    }

    container.innerHTML = html;
}

/**
 * Select a village and show its properties
 * @param {string} village - Village name
 */
function selectVillage(village) {
    // Highlight the selected chip
    var chips = document.querySelectorAll(".village-chip");
    for (var i = 0; i < chips.length; i++) {
        chips[i].classList.remove("active");
        var nameEl = chips[i].querySelector(".village-chip-name");
        if (nameEl && nameEl.textContent === village) {
            chips[i].classList.add("active");
        }
    }

    // Find properties for this village
    var villageProps = [];
    for (var i = 0; i < properties.length; i++) {
        if (properties[i].village === village) {
            villageProps.push(properties[i]);
        }
    }

    var container = document.getElementById("villageProperties");
    var title = document.getElementById("villagePropTitle");
    var grid = document.getElementById("villagePropGrid");

    if (!container || !title || !grid) return;

    title.innerHTML = 'Properties in <span style="color:#00ffc4">' + village + "</span>";

    if (villageProps.length === 0) {
        grid.innerHTML = "" +
            '<div style="grid-column:1/-1;text-align:center;padding:4rem 1rem">' +
            '  <i data-lucide="home" style="width:48px;height:48px;color:#404040;margin:0 auto 0.75rem;display:block"></i>' +
            '  <p style="color:#a3a3a3">No listings in ' + village + " yet.</p>" +
            '  <button onclick="openModal(\'addProperty\')" style="margin-top:1rem;font-size:0.875rem;color:#00ffc4;background:none;border:none;cursor:pointer;text-decoration:underline">+ Post the first ad</button>' +
            "</div>";

        if (window.lucide) {
            lucide.createIcons({ nodes: [grid] });
        }
    } else {
        var html = "";
        for (var i = 0; i < villageProps.length; i++) {
            html += createPropertyCard(villageProps[i], false);
        }
        grid.innerHTML = html;

        if (window.lucide) {
            lucide.createIcons({ nodes: [grid] });
        }
    }

    container.classList.remove("hidden");
    container.scrollIntoView({ behavior: "smooth", block: "start" });
}


// ==================== FORM SUBMISSIONS ====================

/**
 * Handle "Add Property" form submission
 * @param {Event} e - Form submit event
 */
function submitProperty(e) {
    e.preventDefault();

    // Gather form values
    var name = document.getElementById("propName").value.trim();
    var phone = document.getElementById("propPhone").value.trim();
    var taluk = document.getElementById("propTaluk").value;
    var village = document.getElementById("propVillage").value;
    var type = document.getElementById("propType").value;
    var area = parseInt(document.getElementById("propArea").value);
    var price = parseInt(document.getElementById("propPrice").value);
    var road = document.getElementById("propRoad").value;
    var water = document.getElementById("propWater").value;
    var desc = document.getElementById("propDesc").value.trim();
    var survey = document.getElementById("propSurvey").value.trim();

    // Validation
    if (!name || !phone || !taluk || !village || !type || !area || !price) {
        showToast("Please fill all required fields. அனைத்து கட்டாய புலங்களையும் பூர்த்தி செய்யுங்கள்.", "error");
        return;
    }

    if (area <= 0) {
        showToast("Area must be greater than 0. நிலப்பரப்பு 0-க்கு மேல் இருக்க வேண்டும்.", "error");
        return;
    }

    if (price <= 0) {
        showToast("Price must be greater than 0. விலை 0-க்கு மேல் இருக்க வேண்டும்.", "error");
        return;
    }

    // Create new property object
    var newProp = {
        id: nextId++,
        name: name,
        phone: phone,
        taluk: taluk,
        village: village,
        type: type,
        area: area,
        price: price,
        road: road || "",
        water: water || "",
        desc: desc || "No description provided.",
        survey: survey || "",
        date: new Date().toISOString().split("T")[0],
        img: "new-land-listing-" + nextId
    };

    // Add to beginning of array
    properties.unshift(newProp);

    // Close modal and reset form
    closeModal("addProperty");
    e.target.reset();

    // Show success toast
    showToast(
        "உங்கள் விளம்பரம் வெற்றிகரமாக பதிவு செய்யப்பட்டது! Your ad has been posted successfully!",
        "success"
    );

    // Re-render affected sections
    renderFeatured();
    renderTaluks();
}

/**
 * Handle inquiry form submission
 * @param {Event} e - Form submit event
 */
function submitInquiry(e) {
    e.preventDefault();
    var propId = document.getElementById("inquiryPropId").value;
    var propName = "";

    // Find property name for the toast
    for (var i = 0; i < properties.length; i++) {
        if (properties[i].id === parseInt(propId)) {
            propName = properties[i].village + ", " + properties[i].taluk;
            break;
        }
    }

    closeModal("inquiry");
    e.target.reset();

    showToast(
        "விசாரணை அனுப்பப்பட்டது! Inquiry sent for " + (propName || "property") + ".",
        "success"
    );
}

/**
 * Handle contact form submission
 * @param {Event} e - Form submit event
 */
function submitContact(e) {
    e.preventDefault();
    e.target.reset();

    showToast(
        "உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது! We will get back to you soon.",
        "success"
    );
}


// ==================== ANIMATED COUNTERS ====================

/**
 * Animate a number counter from 0 to target
 * @param {string} elementId - Target element ID
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in ms
 */
function animateCounter(elementId, target, duration) {
    duration = duration || 2000;

    var el = document.getElementById(elementId);
    if (!el) return;

    var start = 0;
    var startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);

        // Ease out cubic
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.floor(eased * target);

        el.textContent = current.toLocaleString("en-IN");

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            el.textContent = target.toLocaleString("en-IN");
        }
    }

    requestAnimationFrame(step);
}


// ==================== LOCAL STORAGE ====================

/**
 * Save properties to localStorage for persistence
 */
function saveToLocalStorage() {
    try {
        localStorage.setItem("nagai_properties", JSON.stringify(properties));
        localStorage.setItem("nagai_nextId", nextId.toString());
    } catch (e) {
        // localStorage not available or full - silently fail
    }
}

/**
 * Load properties from localStorage
 * @returns {boolean} Whether data was loaded
 */
function loadFromLocalStorage() {
    try {
        var saved = localStorage.getItem("nagai_properties");
        var savedId = localStorage.getItem("nagai_nextId");

        if (saved) {
            var parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                properties = parsed;
            }
        }
        if (savedId) {
            var id = parseInt(savedId);
            if (id > nextId) {
                nextId = id;
            }
        }
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Auto-save to localStorage periodically
 */
function setupAutoSave() {
    // Save after every property addition
    var originalSubmit = submitProperty;
    submitProperty = function (e) {
        originalSubmit(e);
        saveToLocalStorage();
    };
}


// ==================== KEYBOARD SHORTCUTS ====================

/**
 * Handle global keyboard shortcuts
 * @param {KeyboardEvent} e
 */
function handleKeyboardShortcuts(e) {
    // Ctrl+K or / to focus search (if on home)
    if ((e.ctrlKey && e.key === "k") || (e.key === "/" && !isInputFocused())) {
        e.preventDefault();
        var searchTaluk = document.getElementById("searchTaluk");
        if (searchTaluk) {
            showSection("home");
            setTimeout(function () { searchTaluk.focus(); }, 300);
        }
    }

    // Ctrl+N to open new ad modal
    if (e.ctrlKey && e.key === "n") {
        e.preventDefault();
        openModal("addProperty");
    }

    // Escape to close modals (handled separately)
}

/**
 * Check if any input element is currently focused
 * @returns {boolean}
 */
function isInputFocused() {
    var tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
    return tag === "input" || tag === "select" || tag === "textarea";
}


// ==================== SEARCH / FILTER EVENT LISTENERS ====================

/**
 * Attach change event listeners for filter dropdowns
 */
function attachFilterListeners() {
    var filterTaluk = document.getElementById("filterTaluk");
    if (filterTaluk) {
        filterTaluk.addEventListener("change", function () {
            updateFilterVillages();
            renderListings();
        });
    }

    var filterVillage = document.getElementById("filterVillage");
    if (filterVillage) {
        filterVillage.addEventListener("change", function () {
            renderListings();
        });
    }

    var filterType = document.getElementById("filterType");
    if (filterType) {
        filterType.addEventListener("change", function () {
            renderListings();
        });
    }

    var filterMinPrice = document.getElementById("filterMinPrice");
    if (filterMinPrice) {
        filterMinPrice.addEventListener("input", debounce(function () {
            renderListings();
        }, 500));
    }

    var filterMaxPrice = document.getElementById("filterMaxPrice");
    if (filterMaxPrice) {
        filterMaxPrice.addEventListener("input", debounce(function () {
            renderListings();
        }, 500));
    }

    var sortOrder = document.getElementById("sortOrder");
    if (sortOrder) {
        sortOrder.addEventListener("change", function () {
            renderListings();
        });
    }
}

/**
 * Debounce utility - delays function execution
 * @param {Function} func - Function to debounce
 * @param {number} wait - Delay in ms
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(context, args);
        }, wait);
    };
}


// ==================== INITIALIZATION ====================

/**
 * Main initialization function
 * Called when DOM is fully loaded
 */
function init() {
    // 1. Try to load saved data from localStorage
    loadFromLocalStorage();

    // 2. Populate all dropdown menus
    populateDropdowns();

    // 3. Render home page sections
    renderFeatured();
    renderTaluks();

    // 4. Attach filter event listeners
    attachFilterListeners();

    // 5. Set up modal overlay click handler
    document.addEventListener("click", handleOverlayClick);

    // 6. Set up Escape key handler
    document.addEventListener("keydown", handleEscapeKey);

    // 7. Set up keyboard shortcuts
    document.addEventListener("keydown", handleKeyboardShortcuts);

    // 8. Set up auto-save
    setupAutoSave();

    // 9. Animate hero stats with a delay
    setTimeout(function () {
        animateCounter("statListings", properties.length, 1500);

        var totalVillages = 0;
        var talukKeys = Object.keys(talukData);
        for (var i = 0; i < talukKeys.length; i++) {
            totalVillages += talukData[talukKeys[i]].villages.length;
        }
        animateCounter("statVillages", totalVillages, 2000);
        animateCounter("statDeals", 347, 1800);
    }, 500);

    // 10. Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 11. Log initialization
    console.log(
        "%c நாகை நிலம் %c Nagapattinam Land Portal ",
        "background:#047857;color:#fff;padding:4px 8px;border-radius:4px 0 0 4px;font-weight:bold;",
        "background:#0a0a0a;color:#00ffc4;padding:4px 8px;border-radius:0 4px 4px 0;"
    );
    console.log("Properties:", properties.length, "| Villages:", totalVillagesCount(), "| Taluks: 4");
}

/**
 * Get total village count across all taluks
 * @returns {number}
 */
function totalVillagesCount() {
    var count = 0;
    var keys = Object.keys(talukData);
    for (var i = 0; i < keys.length; i++) {
        count += talukData[keys[i]].villages.length;
    }
    return count;
}

// ==================== DOM READY ====================

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}