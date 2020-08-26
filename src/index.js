import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./script/component/nav-bar.js";
import main from  "./script/view/main.js";
import $ from "jquery";
import "./script/component/sort-bar.js";
import "./script/component/page-bar.js";

document.addEventListener("DOMContentLoaded", main);

$(document).ready(function(){
    var $listItem = $(`.nav-item`);

    $listItem.click(function(){
        $listItem.removeClass(`active`);
        $(this).addClass(`active`)
    })
})