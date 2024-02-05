class ResultMap extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
      <center>
  <a style="text-decoration:none;" class="text-white" href="/maps"><button class="btn btn-outline-danger">Cek RS Terdekat</button></a>
</center>
<br>
          `;
    }
  }
  customElements.define("result-map", ResultMap);
  