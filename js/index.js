/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

$( document ).ready(function() {


        $.get(
            "https://www.googleapis.com/youtube/v3/playlists",{
                part:'snippet,contentDetails',
                channelId:'UCyAn-CGmx_ecg2q0GrhLbcw',
                key:'AIzaSyD8RmHwfYToAwzFzM8a30tbQz_BEF8Ty5I',
                maxResults:50},
            function(data){
                $.each(data.items,function(i,item)
                {
                    var x="";
                    x+="<div class=\"col-md-3 col-sm-4 col-xs-6\">";
                    x+="<div class=\"celebrity-item\">";
                    x+="<div class=\"thumb-wrap\">";
                    x+="<img src=" + item.snippet.thumbnails.high.url +" alt=\"\">";
                    x+="<div class=\"thumb-hover\">";
                    x+="<a class=\"celebrity-link\" href="+'/video-list.html?playlist='+ item.id+"></a>";
                    x+="</div>";
                    x+="</div>";
                    x+="<div class=\"celebrity-details\">";
                    x+="<h4 class=\"celebrity-name\">"+item.snippet.title+"</h4>";
                    x+="<p class=\"celebrity-profession\">"+item.snippet.publishedAt+"</p>";
                    x+="</div>";
                    x+="</div>";
                    x+="</div>";

                    $(".celebrity-list").append(x);
                });


            }
        );
    $.get(
        "https://www.googleapis.com/youtube/v3/playlists",{
            part:'snippet,contentDetails',
            channelId:'UCyAn-CGmx_ecg2q0GrhLbcw',
            key:'AIzaSyD8RmHwfYToAwzFzM8a30tbQz_BEF8Ty5I',
            maxResults:10},
        function(data){
            $.each(data.items,function(i,item)
            {
                var x="";
                x+="<div class=\"video-item\">";
                x+="<div class=\"celebrity-item\">";
                x+="<div class=\"thumb-wrap\">";
                x+="<img src=" + item.snippet.thumbnails.high.url +" alt=\"\">";
                x+="<div class=\"thumb-hover\">";
                x+="<a class=\"celebrity-link\" href="+'/video-list.html?playlist='+ item.id+"></a>";
                x+="</div>";
                x+="</div>";
                x+="<div class=\"celebrity-details\">";
                x+="<h4 class=\"celebrity-name\">"+item.snippet.title+"</h4>";
                x+="<p class=\"celebrity-profession\">"+item.snippet.publishedAt+"</p>";
                x+="</div>";
                x+="</div>";

                $("#video-carousel").append(x);
            });


            $('.owl-carousel.owl-theme').owlCarousel({
                loop:true,
                padding:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                },
                autoplay:true,
                autoplayTimeout:1000,
                autoplayHoverPause:false
            });

        }

    )

});

