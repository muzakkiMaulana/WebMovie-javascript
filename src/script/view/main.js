//import "../component/alert-message.js";
//import DataSource from"../data/movie.js";
//import "../component/carousel-movie";
//import DetailSource from "../data/detail-movie.js";

const main = () => {
    const searchButton = document.querySelector("#searchbutton");
    const sortElement = document.querySelector("#sort");
    const listMovieElement = document.querySelector("#listmovie");
    const carouselElement = document.querySelector("#carousel-render");
    const pagination = document.querySelector("#page");
    const modalTargetElement = document.querySelector("#staticBackdrop");

    const baseurl = `https://api.themoviedb.org/3/discover/movie?api_key=87f638f6f3345b753d6b74ddedc253bb&language=en-US&`;
    const getMovie = (sort, page) => {
        fetch (`${baseurl}sort_by=${sort}&include_adult=false&include_video=true&page=${page}`)
        .then(response =>{
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message)
            } else {
                renderMovie(responseJson.results)
            }
        })
    }

    const onButtonSearchClicked = () => {
        getMovie(sortElement.value, pagination.value);
    }
    
    const renderModalMovie = (responseJson) => {

    listMovieElement.innerHTML +=`
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">${responseJson.title} </h5><span class="text-muted"> (${responseJson.release_date})</span>
                    <button type="button" id="modal-close" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col">
                            <img src="https://image.tmdb.org/t/p/w220_and_h330_face/${responseJson.poster_path}" class="rounded float-left" alt="...">
                        </div>
                        <div class="col">
                            <ul class="list-group list-group-flush pl-3">
                                <li class="list-group-item">Popularity <span class="badge badge-primary">${responseJson.popularity}</span></li>
                                <li class="list-group-item">Status <span class="badge badge-primary">${responseJson.status}</span></li>
                                <li class="list-group-item">Genres: <span class="badge badge-primary">${responseJson.genres[0].name}</span> <span class="badge badge-primary">${responseJson.genres[1].name}</span></li>
                            </ul>      
                        </div>
                    </div>
                    <div class="row">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Overview</li>
                            <li class="list-group-item">${responseJson.overview}</li>
                        </ul>            
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    }

    const renderMovie = (results) => {
        listMovieElement.innerHTML = "";

        results.forEach(result => {
            listMovieElement.innerHTML += `
            <div class="text-center col-lg-3 col-sm-6 col-md-4 my-4 mx-0">
                <div class="card" style="width: 14rem;">
                    <img src="https://image.tmdb.org/t/p/w220_and_h330_face/${result.poster_path}" class="card-img-top">
                    <span class="badge badge-primary py-2">
                    Rating <span class="badge badge-light">${result.vote_average}</span>
                  </span>                  
                        <div class="card-body" id="card-body">
                            <p class="card-title">${result.title}</p>
                            <p class="card-text"><small class="text-muted">${result.release_date}</small></p>
                            <button type="button" class="btn btn-primary button-detail" data-toggle="modal" data-target="#staticBackdrop" id="${result.id}">
                            Detail
                            </button>
                        </div>
                </div>
            </div>
            
            `;
        });

        const buttons = document.querySelectorAll(".button-detail");
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                const buttonId = event.target.id
                //detailMovie(buttonId);
                fetch(`https://api.themoviedb.org/3/movie/${buttonId}?api_key=87f638f6f3345b753d6b74ddedc253bb&language=en-US`)
                .then(response => {
                    return response.json();
                })
                .then(responseJson => {
                    if(responseJson.error) {
                        showResponseMessage(responseJson.message)
                    } else {
                        renderModalMovie(responseJson)
                    }
                })
                .catch(error => {
                    showResponseMessage(error);
                })
            })
        })
    }

    const showResponseMessage = (message = "check your connection") => {
        alert(message);
    }

    searchButton.addEventListener("click", onButtonSearchClicked);
}

export default main;