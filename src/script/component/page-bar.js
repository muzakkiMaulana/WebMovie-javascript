class PageBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML =
        `
        <div class="card text-black bg-light mt-4">
          
          <div class="card-header">Page</div>
          
            <div class="card-body">
              
              <p class="card-text">
                Page Results By
                <select id="page" class="form-control form-control-sm my-2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </p>

            </div>
          
        </div>
        `;
    }

}

customElements.define("page-bar", PageBar);