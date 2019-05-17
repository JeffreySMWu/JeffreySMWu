/* 
    格式
    <div>
        <button id="one" data-id="M7lc1UVf-VE">Play 1!</button>
        <button id="two" data-id="JDYNOJJW2cU">Play 2!</button>
        <button id="three" data-id="4kLkSu6nGP4">Plays 3!</button>
    </div>
    <iframe id="player" src=""></iframe>

*/

Youtube_api = function (_name) {
    //  YouTube api 宣告
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";

    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    //  設定iframe參數
    var player;

    function youTubeReady() {
        player = new YT.Player('player', {
            playerVars: {
                'rel': 0, //Don't show related videos
                'showinfo': 0, //Hide video info
                'autoplay': 1, // Autoplay when player is ready
                'loop': 0, //Loop the video
                'controls': 0, //Hide COntrols
                'playlist': '' //Needed for looping
            },
            events: {
                'onReady': onYouTubePlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onYouTubePlayerReady(event) {
        console.log(event.target.getVideoData());
    }

    function onPlayerStateChange(event) {
        switch (event.data) {
            case -1:
                console.log('unstarted');
                break;
            case 0:
                console.log('video ended');
                break;
            case 1:
                console.log('video playing');
                break;
            case 2:
                console.log('video paused');
                break;
            case 3:
                console.log('video buffering');
                break;
        }
        console.log(player.getPlayerState());
    }

    {
        $("button").click(function () {
            $("#" + _name).attr("src", "https://www.youtube.com/embed/" + $(this).attr("data-id") +
                "?enablejsapi=1");
            youTubeReady();
        });
    }
    return {

    }
}
myYoutube = new Youtube_api("player");