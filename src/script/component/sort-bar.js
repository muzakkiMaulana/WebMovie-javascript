class SortBar extends HTMLElement {
    
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="card text-black bg-light">
        <div class="card-header">Sort</div>
        <div class="card-body">
          <p class="card-text">
            Sort Results By
            <select id="sort" class="form-control form-control-sm my-2">
              <option value="popularity.desc">Popularity Descending</option>
              <option value="popularity.asc">Popularity Ascending</option>
              <option value="release_date.desc">Release Date Descending</option>
              <option value="release_date.asc">Release Date Ascending</option>
              <option value="revenue.desc">Revenue Descending</option>
              <option value="revenue.asc">Revenue Ascending</option>
              <option value="vote_average.desc">Vote Average Descending</option>
              <option value="vote_average.asc">Vote Average Ascending</option>
              <option value="vote_count.desc">Vote Count Descending</option>
              <option value="vote_count.asc">Vote Count Ascending</option>
            </select>

          </p>
        </div>
        
      </div>
        `;
    }
}
 customElements.define("sort-bar", SortBar);