const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                <!-- Aqui apunta al home -->
                    <a href="/">
                    SPA con Javascript
                    </a>
                </h1>
            </div>
            <!-- Aqui apunta a Error404.js -->
            <div class="Header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        </div>
    `;
    return view;
};

export default Header;