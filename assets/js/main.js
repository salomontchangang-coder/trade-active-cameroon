// Main JavaScript for TRADE ACTIVE CAMEROON S.A.

const HERO_DATA = {
    btp: {
        badge: "BTP & GÉNIE CIVIL • INFRASTRUCTURES CAMEROUN",
        title: "Construire les Grandes Réalisations de Demain au Cameroun",
        desc: "Solutions intégrales pour chantiers de construction, gros œuvre, terrassement et voiries (VRD). Matériels certifiés et partenariats internationaux exclusifs au service des bâtisseurs d'Afrique Centrale.",
        img: "assets/img/projects/projet-mbalmayo-sangmelima.webp",
        spec1Title: "Agrément État",
        spec1Val: "Arrêté N°0096",
        spec2Title: "Projets Réalisés",
        spec2Val: "+150M FCFA",
        spec3Title: "Équipes Locales",
        spec3Val: "+20 Experts",
        tag: "Ingénierie BTP",
        ctaProduct: "BTP & Travaux Publics"
    },
    dragage: {
        badge: "DRAGFLOW ITALIE • POMPES LOURDES & DRAGAGE FLUVIO-PORTUAIRE",
        title: "Pompes de Dragage Submersibles & Extraction de Sables",
        desc: "Représentant officiel DRAGFLOW au Cameroun. Pompes submersibles haute puissance conçues pour extraire sables, boues lourdes et sédiments abrasifs jusqu'à 70% de densité solide. Pour carrières, ports et cours d'eau.",
        img: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1400&q=80",
        spec1Title: "Débit Pompage",
        spec1Val: "1 200 m³/h",
        spec2Title: "Densité Matière",
        spec2Val: "Jusqu'à 70%",
        spec3Title: "Applications",
        spec3Val: "Carrières & Ports",
        tag: "Technologie DRAGFLOW",
        ctaProduct: "Pompes de dragage DRAGFLOW"
    },
    sol: {
        badge: "KLINDEX ITALIE • SURFAÇAGE & POLISSAGE DIAMANT DE SOLS",
        title: "Ponceuses Planétaires & Rénovation Haute Couture des Sols",
        desc: "Équipements professionnels KLINDEX pour le surfaçage, meulage et polissage miroir des dalles béton, marbre, granit et terrazzo. Technologie de diamants industriels avec aspiration continue sans poussière.",
        img: "assets/img/products/klindex-tiger-530-500.webp",
        spec1Title: "Vitesse Rotative",
        spec1Val: "300 - 1300 RPM",
        spec2Title: "Surfaçage",
        spec2Val: "Béton & Marbre",
        spec3Title: "Finition",
        spec3Val: "Brillant Miroir",
        tag: "Machines KLINDEX",
        ctaProduct: "Ponceuse Planétaire KLINDEX"
    },
    resine: {
        badge: "PAVARESINE & VIRES • RÉSINES ÉPOXY & FINITIONS DE SOLS",
        title: "Revêtements de Sol Sans Joint & Résines Hautes Performances",
        desc: "Formulations techniques de résines continues époxy et polyuréthane pour entrepôts, cliniques, parkings et résidences contemporaines. Résistance exceptionnelle aux chocs mécaniques et produits corrosifs.",
        img: "assets/img/projects/resine-sol-usine-verte-bleue.webp",
        spec1Title: "Résistance Chimique",
        spec1Val: "Trafic Lourd",
        spec2Title: "Hygiène",
        spec2Val: "100% Imperméable",
        spec3Title: "Tenue Garantie",
        spec3Val: "+15 Ans",
        tag: "PAVARESINE & VIRES",
        ctaProduct: "Résines techniques PAVARESINE / VIRES"
    },
    ascenseur: {
        badge: "CMAlifts EUROPE • ASCENSEURS & MOBILITÉ VERTICALE",
        title: "Ascenseurs Électriques & Panoramiques pour Immeubles Modernes",
        desc: "Fourniture, dimensionnement architectural et suivi technique d'ascenseurs sécurisés pour résidences de standing, immeubles de bureaux et hôtels. Normes européennes strictes CE / EN 81-20.",
        img: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?auto=format&fit=crop&w=1400&q=80",
        spec1Title: "Norme Sécurité",
        spec1Val: "CE / EN 81-20",
        spec2Title: "Élévation",
        spec2Val: "R+2 à R+20",
        spec3Title: "Finitions",
        spec3Val: "Inox & Panoramique",
        tag: "Ascenseurs CMAlifts",
        ctaProduct: "Ascenseur CMAlifts"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. High-Performance Sticky Navbar Scroll Elevation
    const navbar = document.getElementById('navbar');
    if (navbar) {
        let isScrolled = false;
        const handleScroll = () => {
            const shouldBeScrolled = window.scrollY > 20;
            if (shouldBeScrolled !== isScrolled) {
                isScrolled = shouldBeScrolled;
                if (isScrolled) {
                    navbar.classList.add('shadow-lg', 'bg-white/98');
                } else {
                    navbar.classList.remove('shadow-lg', 'bg-white/98');
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // 3. Hero Universe Interactive Switcher
    const heroTabs = document.querySelectorAll('.hero-tab-btn');
    const heroBadge = document.getElementById('hero-badge-text');
    const heroTitle = document.getElementById('hero-title-text');
    const heroDesc = document.getElementById('hero-desc-text');
    const heroImg = document.getElementById('hero-main-img');
    const heroTag = document.getElementById('hero-img-tag');
    const heroSpec1Title = document.getElementById('hero-spec-1-title');
    const heroSpec1Val = document.getElementById('hero-spec-1-val');
    const heroSpec2Title = document.getElementById('hero-spec-2-title');
    const heroSpec2Val = document.getElementById('hero-spec-2-val');
    const heroSpec3Title = document.getElementById('hero-spec-3-title');
    const heroSpec3Val = document.getElementById('hero-spec-3-val');
    const heroCtaBtn = document.getElementById('hero-cta-product');

    function switchHeroUniverse(universeKey) {
        const data = HERO_DATA[universeKey];
        if (!data) return;

        // Update active tab buttons
        heroTabs.forEach(tab => {
            if (tab.getAttribute('data-universe') === universeKey) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // Animate elements with quick fade
        if (heroBadge) heroBadge.innerText = data.badge;
        if (heroTitle) heroTitle.innerText = data.title;
        if (heroDesc) heroDesc.innerText = data.desc;
        if (heroTag) heroTag.innerText = data.tag;
        if (heroSpec1Title) heroSpec1Title.innerText = data.spec1Title;
        if (heroSpec1Val) heroSpec1Val.innerText = data.spec1Val;
        if (heroSpec2Title) heroSpec2Title.innerText = data.spec2Title;
        if (heroSpec2Val) heroSpec2Val.innerText = data.spec2Val;
        if (heroSpec3Title) heroSpec3Title.innerText = data.spec3Title;
        if (heroSpec3Val) heroSpec3Val.innerText = data.spec3Val;

        if (heroImg) {
            heroImg.style.opacity = '0.3';
            setTimeout(() => {
                heroImg.src = data.img;
                heroImg.style.opacity = '1';
            }, 180);
        }

        if (heroCtaBtn) {
            heroCtaBtn.setAttribute('onclick', `requestQuoteFor('${data.ctaProduct}')`);
        }
    }

    heroTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const u = tab.getAttribute('data-universe');
            switchHeroUniverse(u);
        });
    });

    // 4. Product Catalog Filter System & "Voir Plus" Toggle
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const toggleBtn = document.getElementById('toggle-products-btn');
    const toggleText = document.getElementById('toggle-products-text');
    const toggleIcon = document.getElementById('toggle-products-icon');
    const loadMoreContainer = document.getElementById('load-more-container');
    let isCatalogExpanded = false;
    let currentCatalogCategory = 'all';

    function renderCatalogCards() {
        if (currentCatalogCategory === 'all') {
            if (loadMoreContainer) loadMoreContainer.style.display = 'block';
            productCards.forEach(card => {
                const isExtra = card.classList.contains('extra-product');
                if (!isExtra) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = isCatalogExpanded ? 'flex' : 'none';
                    if (isCatalogExpanded) {
                        card.classList.add('animate-fadeIn');
                    }
                }
            });
            if (toggleText) {
                toggleText.textContent = isCatalogExpanded ? "Afficher moins d'équipements" : "Voir plus d'équipements (+4 matériels)";
            }
            if (toggleIcon) {
                toggleIcon.className = isCatalogExpanded 
                    ? "fa-solid fa-chevron-up ml-2.5 text-xs transition-transform" 
                    : "fa-solid fa-chevron-down ml-2.5 text-xs group-hover:translate-y-0.5 transition-transform";
            }
        } else {
            // When filtering by a specific category, show all cards matching that category and hide "Voir Plus"
            if (loadMoreContainer) loadMoreContainer.style.display = 'none';
            productCards.forEach(card => {
                if (card.getAttribute('data-category') === currentCatalogCategory) {
                    card.style.display = 'flex';
                    card.classList.add('animate-fadeIn');
                } else {
                    card.style.display = 'none';
                }
            });
        }
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isCatalogExpanded = !isCatalogExpanded;
            renderCatalogCards();
            if (!isCatalogExpanded) {
                const grid = document.getElementById('product-grid');
                if (grid) {
                    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-brand-blue', 'text-white', 'shadow-md', 'shadow-brand-blue/20', 'border-brand-blue');
                btn.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
                const badge = btn.querySelector('span:last-child');
                if (badge) {
                    badge.className = 'ml-2 px-1.5 py-0.5 text-[10px] bg-slate-100 text-slate-600 rounded-md';
                }
            });
            button.classList.add('active', 'bg-brand-blue', 'text-white', 'shadow-md', 'shadow-brand-blue/20', 'border-brand-blue');
            button.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
            const activeBadge = button.querySelector('span:last-child');
            if (activeBadge) {
                activeBadge.className = 'ml-2 px-1.5 py-0.5 text-[10px] bg-white/20 text-white rounded-md';
            }

            currentCatalogCategory = button.getAttribute('data-category');
            renderCatalogCards();
        });
    });

    // Initial render: 4 primary cards visible
    renderCatalogCards();

    // 5. Form Submission & Direct WhatsApp Redirect
    const quoteForm = document.getElementById('quote-form');
    const formSuccess = document.getElementById('form-success');

    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Background submission to Netlify Forms
            try {
                fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(new FormData(quoteForm)).toString()
                }).catch(() => {});
            } catch (err) {}

            const name = document.getElementById('form-name').value;
            const company = document.getElementById('form-company').value || 'Particulier / Non précisé';
            const phone = document.getElementById('form-phone').value;
            const email = document.getElementById('form-email').value || 'Non renseigné';
            const interest = document.getElementById('form-interest').value;
            const message = document.getElementById('form-message').value;

            const waText = `*NOUVELLE DEMANDE DE DEVIS - TRADE ACTIVE CAMEROON S.A.*%0A%0A` +
                           `👤 *Client :* ${encodeURIComponent(name)}%0A` +
                           `🏢 *Entreprise :* ${encodeURIComponent(company)}%0A` +
                           `📞 *Téléphone :* ${encodeURIComponent(phone)}%0A` +
                           `✉️ *Email :* ${encodeURIComponent(email)}%0A` +
                           `⚙️ *Domaine :* ${encodeURIComponent(interest)}%0A` +
                           `📝 *Détail du projet :*%0A${encodeURIComponent(message)}`;

            const targetPhone = "237655417342";
            const whatsappUrl = `https://wa.me/${targetPhone}?text=${waText}`;

            if (formSuccess) {
                formSuccess.classList.remove('hidden');
            }

            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 800);
        });
    }

    // 5bis. Interactive Pôles Filter
    const poleFilterBtns = document.querySelectorAll('.pole-filter-btn');
    const poleCards = document.querySelectorAll('.pole-card');

    if (poleFilterBtns.length > 0 && poleCards.length > 0) {
        poleFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                poleFilterBtns.forEach(b => {
                    b.classList.remove('active', 'bg-brand-blue', 'text-white', 'shadow-sm');
                    b.classList.add('bg-slate-100', 'text-slate-700');
                });
                btn.classList.add('active', 'bg-brand-blue', 'text-white', 'shadow-sm');
                btn.classList.remove('bg-slate-100', 'text-slate-700');

                const poleCategory = btn.getAttribute('data-pole');
                poleCards.forEach(card => {
                    if (poleCategory === 'all' || card.getAttribute('data-pole') === poleCategory) {
                        card.style.display = 'flex';
                        card.classList.add('animate-fadeIn');
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});

// 6. Global helper function to prefill quote from product card
function requestQuoteFor(productName) {
    const contactSection = document.getElementById('contact-form') || document.getElementById('contact');
    const messageField = document.getElementById('form-message');
    const interestField = document.getElementById('form-interest');

    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    if (messageField) {
        messageField.value = `Bonjour, je souhaite recevoir les caractéristiques techniques détaillées et une proposition de devis pour : ${productName}.`;
        setTimeout(() => messageField.focus(), 600);
    }

    if (interestField) {
        if (productName.includes('DRAGFLOW')) {
            interestField.value = 'Équipements Dragflow';
        } else if (productName.includes('KLINDEX')) {
            interestField.value = 'Machines Klindex';
        } else if (productName.includes('PAVARESINE') || productName.includes('VIRES')) {
            interestField.value = 'Résines Pavaresine / Vires';
        } else if (productName.includes('Ascenseur') || productName.includes('CMAlifts')) {
            interestField.value = 'Ascenseurs CMAlifts';
        } else if (productName.includes('BTP') || productName.includes('Génie Civil')) {
            interestField.value = 'BTP & Travaux Publics';
        }
    }
}

// 7. Global helper function to prefill quote from technical poles
function selectPoleForQuote(interestValue, customMessage) {
    const contactSection = document.getElementById('contact-form') || document.getElementById('contact');
    const messageField = document.getElementById('form-message');
    const interestField = document.getElementById('form-interest');

    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    if (interestField && interestValue) {
        interestField.value = interestValue;
    }

    if (messageField) {
        messageField.value = customMessage || `Bonjour TRADE ACTIVE CAMEROON, je souhaite une étude technique et une offre de devis pour le domaine : ${interestValue}.`;
        setTimeout(() => messageField.focus(), 600);
    }
}

// 8. Global helper function to trigger direct WhatsApp inquiry for a specific product
function quickWhatsAppQuote(productName) {
    const text = `*DEMANDE DE DOCUMENTATION & COTATION*%0A%0A` +
                 `📦 *Équipement :* ${encodeURIComponent(productName)}%0A` +
                 `Bonjour TRADE ACTIVE CAMEROON, merci de me transmettre la fiche technique et le tarif / devis pour ce matériel.`;
    window.open(`https://wa.me/237655417342?text=${text}`, '_blank');
}

