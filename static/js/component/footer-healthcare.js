class FooterHealthcare extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="inner-footer">
    <div class="d-md-flex flex-md-row text-white">
      <div class="sub-section-footer">
        <span class="logo-white">KitaSehat</span>
        <p class="pb-3 pt-2"><i class="fa-sharp fa-solid fa-location-dot"></i> Bandung, Indonesia</p>
      </div>
      <div class="sub-section-footer" >
        <p class="pb-2 pt-2" style="font-weight: 700">LAYANAN KAMI</p>
        <p class="pb-2"><a style="text-decoration:none;"class="text-white"href="/">Beranda</a></p>
        <p class="pb-2"><a style="text-decoration:none;"class="text-white"href="/about">Tentang Kami</a></p>
        <p class="pb-2"><a style="text-decoration:none;"class="text-white"href="/predict">Cek Kesehatan</a></p>
        <p class="pb-2"><a style="text-decoration:none;"class="text-white"href="/article">Artikel Kesehatan</a></p>
      </div>
      <div class="sub-section-footer" >
        <p class="pb-2 pt-2" style="font-weight: 700">HUBUNGI KAMI</p>
        <p class="pb-2"><a style="text-decoration:none;" class="text-white"href="mailto:andikadwiptra@gmail.com"> Andika Dwi Putra</a></p>
        <p class="pb-2"><a style="text-decoration:none;" class="text-white"href="mailto:alifmunawar81@gmail.com"> Alif Munawar</a></p>
        <p class="pb-2"><a style="text-decoration:none;" class="text-white"href="mailto:dimasfeb17@gmail.com"> Dimas Febrian Saputra</a></p>
        <p class="pb-2"><a style="text-decoration:none;" class="text-white"href="mailto:ranggadisap@gmail.com"> Rangga Adi Saputra</a></p>
      </div>
    </div>
    </div>
    
      `;
  }
}
customElements.define("footer-healthcare", FooterHealthcare);
