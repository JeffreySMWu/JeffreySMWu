DeviceOrientation = function (_target) {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function (event) {
            var alpha = event.alpha,
                beta = event.beta,
                gamma = event.gamma,
                a = Math.round(alpha),
                b = Math.round(beta),
                g = Math.round(gamma);

            //   var a = document.getElementById('alpha'),
            //   		b = document.getElementById('beta'),
            //   		g = document.getElementById('gamma'),

            // a = Math.round(alpha);
            // b = Math.round(beta);
            // g = Math.round(gamma);
            if (b < 50 && b > -50) {
                TweenMax.set(_target, {
                    y: -b / 1.5
                });
            }
            if (g < 30 && g > -30) {
                TweenMax.set(_target, {
                    x: -g
                });
            }
        }, false);
    } else {
        document.querySelector('body').innerHTML = '你的瀏覽器不支援喔';
    }
}

var new_device = new DeviceOrientation($(".back"));