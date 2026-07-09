/* ============================================
   Admin Panel - நாகை நிலம்
   Customer Data & Report Management
   ============================================ */

// ==================== DATA ====================

var landTypes = {
    agricultural: { label: "விவசாய", en: "Agricultural", color: "#22c55e" },
    residential:  { label: "குடியிருப்பு", en: "Residential", color: "#3b82f6" },
    commercial:   { label: "வணிக", en: "Commercial", color: "#f59e0b" },
    industrial:   { label: "தொழில்", en: "Industrial", color: "#8b5cf6" },
    house:        { label: "வீடு", en: "House", color: "#ef4444" },
    farmhouse:    { label: "பண்ணை", en: "Farm House", color: "#06b6d4" }
};

var statusLabels = {
    active:   { label: "Active",   color: "#22c55e", bg: "rgba(34,197,94,0.15)" },
    sold:     { label: "Sold",     color: "#ef4444", bg: "rgba(239,68,68,0.15)" },
    hold:     { label: "Hold",     color: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
    rejected: { label: "Rejected", color: "#737373", bg: "rgba(115,115,115,0.15)" }
};

var currentTypeFilter = "all";
var deleteTargetId = null;

/**
 * Load properties from localStorage
 */
function loadProperties() {
    try {
        var saved = localStorage.getItem("nagai_properties");
        if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
}

/**
 * Save properties to localStorage
 */
function saveProperties(props) {
    try {
        localStorage.setItem("nagai_properties", JSON.stringify(props));
    } catch (e) {}
}

/**
 * Load activity log
 */
function loadLog() {
    try {
        var saved = localStorage.getItem("nagai_admin_log");
        if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
}

/**
 * Add to activity log
 */
function addLog(action, detail) {
    var log = loadLog();
    log.unshift({
        time: new Date().toISOString(),
        action: action,
        detail: detail
    });
    if (log.length > 100) log = log.slice(0, 100);
    try {
        localStorage.setItem("nagai_admin_log", JSON.stringify(log));
    } catch (e) {}
}

/**
 * Format price
 */
function formatPrice(num) {
    if (num >= 10000000) return "₹" + (num / 10000000).toFixed(2) + " Cr";
    if (num >= 100000) return "₹" + (num / 100000).toFixed(2) + " L";
    return "₹" + num.toLocaleString("en-IN");
}

/**
 * Show toast
 */
function showToast(msg, type) {
    type = type || "success";
    var box = document.getElementById("toastBox");
    var el = document.createElement("div");
    el.className = "toast-item toast-" + type;
    el.textContent = msg;
    box.appendChild(el);
    setTimeout(function () {
        el.style.opacity = "0";
        el.style.transform = "translateX(100px)";
        el.style.transition = "all 0.3s";
        setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 300);
    }, 3000);
}

/**
 * Get filtered properties
 */
function getFiltered() {
    var props = loadProperties();
    var search = (document.getElementById("adminSearch").value || "").toLowerCase();

    if (currentTypeFilter !== "all") {
        props = props.filter(function (p) { return p.type === currentTypeFilter; });
    }

    if (search) {
        props = props.filter(function (p) {
            return (p.name || "").toLowerCase().indexOf(search) !== -1 ||
                   (p.village || "").toLowerCase().indexOf(search) !== -1 ||
                   (p.taluk || "").toLowerCase().indexOf(search) !== -1 ||
                   (p.phone || "").indexOf(search) !== -1 ||
                   (p.survey || "").toLowerCase().indexOf(search) !== -1;
        });
    }

    return props;
}


// ==================== STATS ====================

function renderStats() {
    var props = loadProperties();
    var today = new Date().toISOString().split("T")[0];
    var weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().split("T")[0];

    var todayCount = 0, weekCount = 0, totalValue = 0, totalArea = 0;

    for (var i = 0; i < props.length; i++) {
        totalValue += props[i].price || 0;
        totalArea += props[i].area || 0;
        if (props[i].date === today) todayCount++;
        if (props[i].date >= weekAgo) weekCount++;
    }

    document.getElementById("statTotal").textContent = props.length;
    document.getElementById("statToday").textContent = todayCount;
    document.getElementById("statWeek").textContent = weekCount;
    document.getElementById("statValue").textContent = formatPrice(totalValue);
    document.getElementById("statAvg").textContent = totalArea > 0 ? formatPrice(Math.round(totalValue / totalArea)) : "₹0";
}


// ==================== CHARTS ====================

function renderCharts() {
    var props = loadProperties();

    // Type Chart
    var typeCounts = {};
    for (var i = 0; i < props.length; i++) {
        var t = props[i].type || "other";
        typeCounts[t] = (typeCounts[t] || 0) + 1;
    }

    var typeHtml = "";
    var maxType = 1;
    for (var k in typeCounts) { if (typeCounts[k] > maxType) maxType = typeCounts[k]; }

    for (var k in typeCounts) {
        var info = landTypes[k] || { label: k, color: "#888" };
        var pct = Math.round((typeCounts[k] / maxType) * 100);
        typeHtml += '<div class="flex items-center gap-3">' +
            '<div class="w-20 text-xs text-neutral-400 text-right flex-shrink-0">' + info.label + '</div>' +
            '<div class="flex-1 bg-[#111] rounded overflow-hidden">' +
            '<div class="chart-bar" style="width:' + pct + '%;background:' + info.color + '"></div>' +
            '</div>' +
            '<div class="w-8 text-xs text-white font-semibold text-right">' + typeCounts[k] + '</div>' +
            '</div>';
    }
    document.getElementById("typeChart").innerHTML = typeHtml || '<p class="text-sm text-neutral-600">No data</p>';

    // Taluk Chart
    var talukCounts = {};
    for (var i = 0; i < props.length; i++) {
        var t = props[i].taluk || "Unknown";
        talukCounts[t] = (talukCounts[t] || 0) + 1;
    }

    var talukHtml = "";
    var maxTaluk = 1;
    for (var k in talukCounts) { if (talukCounts[k] > maxTaluk) maxTaluk = talukCounts[k]; }

    var talukColors = ["#00ffc4", "#3b82f6", "#f59e0b", "#a78bfa"];
    var ti = 0;
    for (var k in talukCounts) {
        var pct = Math.round((talukCounts[k] / maxTaluk) * 100);
        var color = talukColors[ti % talukColors.length];
        talukHtml += '<div class="flex items-center gap-3">' +
            '<div class="w-24 text-xs text-neutral-400 text-right flex-shrink-0">' + k + '</div>' +
            '<div class="flex-1 bg-[#111] rounded overflow-hidden">' +
            '<div class="chart-bar" style="width:' + pct + '%;background:' + color + '"></div>' +
            '</div>' +
            '<div class="w-8 text-xs text-white font-semibold text-right">' + talukCounts[k] + '</div>' +
            '</div>';
        ti++;
    }
    document.getElementById("talukChart").innerHTML = talukHtml || '<p class="text-sm text-neutral-600">No data</p>';
}


// ==================== TABLE ====================

function renderTable() {
    var props = getFiltered();
    var tbody = document.getElementById("tableBody");
    var empty = document.getElementById("emptyTable");
    var countEl = document.getElementById("filterCount");

    countEl.textContent = "(" + props.length + ")";

    if (props.length === 0) {
        tbody.innerHTML = "";
        empty.classList.remove("hidden");
        return;
    }

    empty.classList.add("hidden");

    var html = "";
    for (var i = 0; i < props.length; i++) {
        var p = props[i];
        var typeInfo = landTypes[p.type] || { label: p.type, color: "#888" };
        var statusInfo = statusLabels[p.status || "active"] || statusLabels.active;

        html += "<tr>" +
            "<td class='text-neutral-500'>" + (i + 1) + "</td>" +
            "<td class='font-medium text-white'>" + escHtml(p.name) + "</td>" +
            "<td><a href='tel:" + p.phone + "' class='text-[#00ffc4] hover:underline'>" + escHtml(p.phone) + "</a></td>" +
            "<td>" + escHtml(p.village) + "</td>" +
            "<td class='text-neutral-400'>" + escHtml(p.taluk) + "</td>" +
            "<td class='hide-mobile'><span class='badge' style='background:" + typeInfo.color + "20;color:" + typeInfo.color + "'>" + typeInfo.label + "</span></td>" +
            "<td>" + p.area + " ct</td>" +
            "<td class='font-semibold text-white'>" + formatPrice(p.price) + "</td>" +
            "<td class='hide-mobile text-neutral-500 text-xs'>" + (p.date || "") + "</td>" +
            "<td>" +
            "<div class='flex gap-1'>" +
            "<button class='btn-action view' onclick='viewProp(" + p.id + ")' title='View'><i data-lucide='eye' class='w-3 h-3'></i></button>" +
            "<button class='btn-action edit' onclick='editProp(" + p.id + ")' title='Edit'><i data-lucide='pencil' class='w-3 h-3'></i></button>" +
            "<button class='btn-action delete' onclick='deleteProp(" + p.id + ")' title='Delete'><i data-lucide='trash-2' class='w-3 h-3'></i></button>" +
            "</div>" +
            "</td>" +
            "</tr>";
    }

    tbody.innerHTML = html;
    if (window.lucide) lucide.createIcons({ nodes: [tbody] });
}

function escHtml(str) {
    if (!str) return "";
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}


// ==================== FILTER ====================

function setTypeFilter(type, btn) {
    currentTypeFilter = type;
    var btns = document.querySelectorAll(".filter-btn");
    for (var i = 0; i < btns.length; i++) btns[i].classList.remove("active");
    if (btn) btn.classList.add("active");
    renderTable();
}


// ==================== VIEW MODAL ====================

function viewProp(id) {
    var props = loadProperties();
    var p = null;
    for (var i = 0; i < props.length; i++) {
        if (props[i].id === id) { p = props[i]; break; }
    }
    if (!p) return;

    var typeInfo = landTypes[p.type] || { label: p.type, en: p.type, color: "#888" };
    var statusInfo = statusLabels[p.status || "active"] || statusLabels.active;

    var html = "<div class='space-y-4'>" +
        "<div class='flex items-center gap-2 mb-4'>" +
        "<span class='badge' style='background:" + typeInfo.color + "20;color:" + typeInfo.color + "'>" + typeInfo.label + "</span>" +
        "<span class='badge' style='background:" + statusInfo.bg + ";color:" + statusInfo.color + "'>" + statusInfo.label + "</span>" +
        "</div>" +

        row("Owner", p.name) +
        row("Phone", "<a href='tel:" + p.phone + "' class='text-[#00ffc4]'>" + p.phone + "</a>") +
        row("Village", p.village) +
        row("Taluk", p.taluk) +
        row("Area", p.area + " cents (" + Math.round(p.area * 435.6) + " sq.ft)") +
        row("Price", "<span class='text-[#00ffc4] font-bold'>" + formatPrice(p.price) + "</span> (" + formatPrice(Math.round(p.price / p.area)) + "/cent)") +
        row("Road", p.road || "N/A") +
        row("Water", p.water || "N/A") +
        row("Survey No", p.survey || "N/A") +
        row("Posted", p.date || "N/A") +
        "<div><div class='text-[10px] font-bold text-neutral-500 tracking-widest uppercase mb-1'>Description</div><p class='text-sm text-neutral-400 leading-relaxed'>" + escHtml(p.desc) + "</p></div>" +

        (p.adminNotes ? "<div class='bg-[#111] rounded-lg p-3 border border-[#f59e0b]/20'><div class='text-[10px] font-bold text-[#f59e0b] tracking-widest uppercase mb-1'>Admin Notes</div><p class='text-sm text-neutral-300'>" + escHtml(p.adminNotes) + "</p></div>" : "") +

        "</div>";

    document.getElementById("viewContent").innerHTML = html;
    document.getElementById("viewModal").classList.remove("hidden");
    if (window.lucide) lucide.createIcons();
}

function row(label, value) {
    return "<div class='flex justify-between py-2 border-b border-white/5'><span class='text-xs text-neutral-500'>" + label + "</span><span class='text-sm text-neutral-200 text-right max-w-[60%]'>" + value + "</span></div>";
}

function closeViewModal() {
    document.getElementById("viewModal").classList.add("hidden");
}


// ==================== EDIT MODAL ====================

function editProp(id) {
    var props = loadProperties();
    var p = null;
    for (var i = 0; i < props.length; i++) {
        if (props[i].id === id) { p = props[i]; break; }
    }
    if (!p) return;

    document.getElementById("editId").value = p.id;
    document.getElementById("editName").value = p.name || "";
    document.getElementById("editPhone").value = p.phone || "";
    document.getElementById("editPrice").value = p.price || "";
    document.getElementById("editArea").value = p.area || "";
    document.getElementById("editStatus").value = p.status || "active";
    document.getElementById("editNotes").value = p.adminNotes || "";

    document.getElementById("editModal").classList.remove("hidden");
}

function closeEditModal() {
    document.getElementById("editModal").classList.add("hidden");
}

function saveEdit(e) {
    e.preventDefault();

    var id = parseInt(document.getElementById("editId").value);
    var props = loadProperties();

    for (var i = 0; i < props.length; i++) {
        if (props[i].id === id) {
            props[i].name = document.getElementById("editName").value;
            props[i].phone = document.getElementById("editPhone").value;
            props[i].price = parseInt(document.getElementById("editPrice").value);
            props[i].area = parseInt(document.getElementById("editArea").value);
            props[i].status = document.getElementById("editStatus").value;
            props[i].adminNotes = document.getElementById("editNotes").value;
            break;
        }
    }

    saveProperties(props);
    addLog("EDIT", "Edited listing #" + id + " - " + props[i].name);
    closeEditModal();
    refreshAll();
    showToast("Listing updated! பட்டியல் புதுப்பிக்கப்பட்டது");
}


// ==================== DELETE ====================

function deleteProp(id) {
    deleteTargetId = id;
    var props = loadProperties();
    var p = null;
    for (var i = 0; i < props.length; i++) {
        if (props[i].id === id) { p = props[i]; break; }
    }
    document.getElementById("deleteText").textContent = "Delete \"" + (p ? p.village + " - " + p.name : "#" + id) + "\"? This cannot be undone.";
    document.getElementById("deleteModal").classList.remove("hidden");
    if (window.lucide) lucide.createIcons();
}

function closeDeleteModal() {
    document.getElementById("deleteModal").classList.add("hidden");
    deleteTargetId = null;
}

function confirmDelete() {
    if (deleteTargetId === null) return;

    var props = loadProperties();
    var name = "";
    var newProps = [];
    for (var i = 0; i < props.length; i++) {
        if (props[i].id === deleteTargetId) {
            name = props[i].name;
        } else {
            newProps.push(props[i]);
        }
    }

    saveProperties(newProps);
    addLog("DELETE", "Deleted listing #" + deleteTargetId + " - " + name);
    closeDeleteModal();
    refreshAll();
    showToast("Listing deleted! பட்டியல் நீக்கப்பட்டது", "error");
}


// ==================== EXPORT CSV ====================

function exportCSV() {
    var props = loadProperties();

    if (props.length === 0) {
        showToast("No data to export! தரவு இல்லை", "error");
        return;
    }

    var headers = ["ID", "Name", "Phone", "Taluk", "Village", "Type", "Area (cents)", "Price (₹)", "Price/Cent", "Road", "Water", "Survey No", "Date", "Status", "Description"];

    var rows = [headers.join(",")];

    for (var i = 0; i < props.length; i++) {
        var p = props[i];
        var typeInfo = landTypes[p.type] || { en: p.type };
        var perCent = p.area > 0 ? Math.round(p.price / p.area) : 0;
        var row = [
            p.id,
            '"' + (p.name || "").replace(/"/g, '""') + '"',
            p.phone || "",
            p.taluk || "",
            p.village || "",
            typeInfo.en || "",
            p.area || 0,
            p.price || 0,
            perCent,
            p.road || "",
            p.water || "",
            p.survey || "",
            p.date || "",
            p.status || "active",
            '"' + (p.desc || "").replace(/"/g, '""').replace(/\n/g, " ") + '"'
        ];
        rows.push(row.join(","));
    }

    var csv = rows.join("\n");
    var blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "nagai-land-listings-" + new Date().toISOString().split("T")[0] + ".csv";
    link.click();

    addLog("EXPORT", "Exported " + props.length + " listings to CSV");
    showToast(props.length + " listings exported! CSV பதிவிறக்கம் ஆனது");
}


// ==================== ACTIVITY LOG ====================

function renderLog() {
    var log = loadLog();
    var container = document.getElementById("activityLog");

    if (log.length === 0) {
        container.innerHTML = '<p class="text-sm text-neutral-600">No activity yet</p>';
        return;
    }

    var html = "";
    var show = Math.min(log.length, 20);

    for (var i = 0; i < show; i++) {
        var l = log[i];
        var d = new Date(l.time);
        var timeStr = d.toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

        var actionColor = "#737373";
        if (l.action === "DELETE") actionColor = "#ef4444";
        if (l.action === "EDIT") actionColor = "#f59e0b";
        if (l.action === "EXPORT") actionColor = "#3b82f6";

        html += '<div class="flex items-center gap-3 py-2 px-3 rounded-lg bg-[#111]/50">' +
            '<span class="text-[10px] font-bold tracking-wider uppercase" style="color:' + actionColor + ';min-width:60px">' + l.action + '</span>' +
            '<span class="text-xs text-neutral-400 flex-1">' + escHtml(l.detail) + '</span>' +
            '<span class="text-[10px] text-neutral-600 flex-shrink-0">' + timeStr + '</span>' +
            '</div>';
    }

    container.innerHTML = html;
}


// ==================== REFRESH ALL ====================

function refreshAll() {
    renderStats();
    renderCharts();
    renderTable();
    renderLog();
}


// ==================== PASSWORD PROTECTION ====================

function checkAccess() {
    var sessionKey = "nagai_admin_session";
    var session = sessionStorage.getItem(sessionKey);

    if (session) return true;

    var pass = prompt("🔒 Enter admin password:\n\nகடவுச்சொல் உள்ளிடுங்கள்:");
    if (pass === "nagai1234" || pass === "admin1234" || pass === "Nagai@2025") {
        sessionStorage.setItem(sessionKey, "true");
        return true;
    }

    alert("❌ Wrong password! தவறான கடவுச்சொல்!");
    window.location.href = "index.html";
    return false;
}


// ==================== INIT ====================

function init() {
    if (!checkAccess()) return;
    refreshAll();
    if (window.lucide) lucide.createIcons();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}