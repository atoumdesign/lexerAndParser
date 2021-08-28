function setFooter(params) {
    let footer = document.getElementById('content-wrapper');

    let html = "\
        <footer class='sticky-footer bg-white'>\
            <div class='container my-auto'>\
                <div class='copyright text-center my-auto'>\
                    <span>Tiago Brito - Linguagens Formais 2021</span>\
                </div>\
            </div>\
        </footer>"

    footer.insertAdjacentHTML('beforeend',html);
}

function setTopBar(params) {
    let topbar = document.getElementById('content');

    let html = "\
        <nav class='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>\
            <!-- Topbar Navbar -->\
            <ul class='navbar-nav ml-auto'>\
                <!-- Nav Item - Alerts -->\
                <li class='nav-item dropdown no-arrow mx-1'>\
                    <a class='nav-link dropdown-toggle' href='#' id='alertsDropdown' role='button'\
                        data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
                        <i class='fas fa-bell fa-fw'></i>\
                        <!-- Counter - Alerts -->\
                        <span class='badge badge-danger badge-counter'>3+</span>\
                    </a>\
                    <!-- Dropdown - Alerts -->\
                    <div class='dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in' aria-labelledby='alertsDropdown'>\
                        <h6 class='dropdown-header'>\
                            Alerts Center\
                        </h6>\
                        <a class='dropdown-item d-flex align-items-center' href='#'>\
                            <div class='mr-3'>\
                                <div class='icon-circle bg-primary'>\
                                    <i class='fas fa-file-alt text-white'></i>\
                                </div>\
                            </div>\
                            <div>\
                                <div class='small text-gray-500'>December 12, 2019</div>\
                                <span class='font-weight-bold'>A new monthly report is ready to download!</span>\
                            </div>\
                        </a>\
                        <a class='dropdown-item text-center small text-gray-500' href='#''>Show All Alerts</a>\
                    </div>\
                </li>\
                <!-- Nav Item - Messages -->\
                <li class='nav-item dropdown no-arrow mx-1'>\
                    <a class='nav-link dropdown-toggle' href='#' id='messagesDropdown' role='button'\
                        data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
                        <i class='fas fa-envelope fa-fw'></i>\
                        <!-- Counter - Messages -->\
                        <span class='badge badge-danger badge-counter'>7</span>\
                    </a>\
                    <!-- Dropdown - Messages -->\
                    <div class='dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in' aria-labelledby='messagesDropdown'>\
                        <h6 class='dropdown-header'>\
                            Message Center\
                        </h6>\
                        <a class='dropdown-item d-flex align-items-center' href='#'>\
                            <div class='dropdown-list-image mr-3'>\
                                <img class='rounded-circle' src='img/undraw_profile_1.svg'\
                                    alt='...'>\
                                <div class='status-indicator bg-success'></div>\
                            </div>\
                            <div class='font-weight-bold'>\
                                <div class='text-truncate'>Hi there! I am wondering if you can help me with a problem I've been having.</div>\
                                <div class='small text-gray-500'>Emily Fowler · 58m</div>\
                            </div>\
                        </a>\
                        <a class='dropdown-item text-center small text-gray-500' href='#''>Read More Messages</a>\
                    </div>\
                </li>\
            </ul>\
        </nav>";

    topbar.insertAdjacentHTML('afterbegin',html);
}

function setSidebar(params) {
    let sidebar = document.getElementById('wrapper');

    let html = "\
        <ul class='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id='accordionSidebar'>\
        <!-- Sidebar - Brand -->\
        <a class='sidebar-brand d-flex align-items-center justify-content-center' href='index.html'>\
            <div class='sidebar-brand-icon rotate-n-15'>\
                <i class='fas fa-laugh-wink'></i>\
            </div>\
            <div class='sidebar-brand-text mx-3'>Analisador léxico</div>\
        </a>\
        <!-- Divider -->\
        <hr class='sidebar-divider my-0'>\
        <!-- Nav Item - Dashboard -->\
        <li class='nav-item'>\
            <a class='nav-link' href='index.html'>\
                <i class='fas fa-fw fa-tachometer-alt'></i>\
                <span>Código</span></a>\
        </li>\
        <!-- Divider -->\
        <hr class='sidebar-divider'>\
        <!-- Heading -->\
        <div class='sidebar-heading'>\
            Autômato\
        </div>\
        <li class='nav-item'>\
            <a class='nav-link' href='graph.html'>\
                <i class='fas fa-fw fa-tachometer-alt'></i>\
                <span>Grafo</span></a>\
        </li>\
        <li class='nav-item'>\
        <a class='nav-link' href='table.html'>\
            <i class='fas fa-fw fa-tachometer-alt'></i>\
            <span>Tabela</span></a>\
        </li>\
        <!-- Divider -->\
        <hr class='sidebar-divider'>\
        <!-- Heading -->\
        <div class='sidebar-heading'>\
            Configurações\
        </div>\
        <!-- Nav Item - Charts -->\
        <li class='nav-item'>\
            <a class='nav-link' href='elements.html'>\
                <i class='fas fa-fw fa-chart-area'></i>\
                <span>Elementos</span></a>\
        </li>\
        <li class='nav-item'>\
            <a class='nav-link' href='alphabet.html'>\
                <i class='fas fa-fw fa-table'></i>\
                <span>Alfabeto</span></a>\
        </li>\
        <!-- Divider -->\
        <hr class='sidebar-divider d-none d-md-block'>\
        </ul>";

    sidebar.insertAdjacentHTML('afterbegin',html);
}

function setScrollUp(params) {
    let scroll = document.getElementById('page-top');

    let html = "\
        <a class='scroll-to-top rounded' href='#page-top'>\
            <i class='fas fa-angle-up'></i>\
        </a>";

    scroll.insertAdjacentHTML('beforeend',html);
}

setSidebar();
setTopBar();
setFooter();
setScrollUp();