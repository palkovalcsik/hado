(function(n) {
    var r = n("#bg").children("canvas"),
        y = r[0],
        C = r[1],
        D = r[2],
        F = [255, 255, 255]; // Color of the small lines
    if (y.getContext) {
        var d = y.getContext("2d"),
            t = C.getContext("2d"),
            p = D.getContext("2d"),
            m = Math,
            u = 50 / 360 * m.PI * 2,
            v = [],
            w = [],
            c, f, x;
        requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(a, c) {
            setTimeout(a, 1000 / 60);
        };
        cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame || clearTimeout;
        var z = function() {
                c = n(window).width();
                f = n(window).height();
                r.each(function() {
                    this.width = c;
                    this.height = f;
                });
            },
            A = function() {
                var a = m.sin(u),
                    g = m.cos(u);
                t.clearRect(0, 0, c, f);
                for (var d = 0, n = v.length; d < n; d++) {
                    var e = v[d],
                        h = e.x,
                        k = e.y,
                        b = e.radius,
                        l = e.speed,
                        h = h > c + b ? -b : h < -b ? c + b : h + a * l,
                        k = k > f + b ? -b : k < -b ? f + b : k - g * l;
                    e.x = h;
                    e.y = k;
                    var l = e.color,
                        e = e.alpha,
                        q = t.createRadialGradient(h, k, b, h, k, 0);
                    q.addColorStop(0, "rgba(" + l[0] + "," + l[1] + "," + l[2] + "," + (e - 0.8) + ")");
                    q.addColorStop(1, "rgba(" + l[0] + "," + l[1] + "," + l[2] + "," + (e - 0.8) + ")");
                    t.beginPath();
                    t.arc(h, k, b, 0, 2 * m.PI, !0);
                    t.fillStyle = q;
                    t.fill();
                }
                p.clearRect(0, 0, c, f);
                d = 0;
                for (n = w.length; d < n; d++) {
                    e = w[d];
                    h = e.x;
                    k = e.y;
                    b = e.width;
                    l = e.speed;
                    h = h > c + b * a ? -b * a : h < -b * a ? c + b * a : h + a * l;
                    k = k > f + b * g ? -b * g : k < -b * g ? f + b * g : k - g * l;
                    e.x = h;
                    e.y = k;
                    var q = b,
                        b = e.color,
                        e = e.alpha,
                        l = h + m.sin(u) * q,
                        q = k - m.cos(u) * q,
                        r = p.createLinearGradient(h, k, l, q);
                    r.addColorStop(0, "rgba(" + b[0] + "," + b[1] + "," + b[2] + "," + (e - 0.8) + ")");
                    r.addColorStop(1, "rgba(" + b[0] + "," + b[1] + "," + b[2] + "," + (e - 0.4) + ")");
                    p.beginPath();
                    p.moveTo(h, k);
                    p.lineTo(l, q);
                    p.lineWidth = 2;
                    p.lineCap = "round";
                    p.strokeStyle = r;
                    p.stroke();
                }
                x = requestAnimationFrame(A);
            },
            B = function() {
                w = [];
                for (a = 0; 8 > a; a++) { // Want more lines? Just increase the 8...
                    for (g = 0; 7 > g; g++) { // ...and 7
                        w.push({
                            x: m.random() * c,
                            y: m.random() * f,
                            width: m.random() * (200 + 5 * g) + (30 + 5 * g),
                            color: F,
                            alpha: 0.5 * m.random() + (0.3 - 0.1 * g),
                            speed: 10 * (1 + 0.5 * g)
                        });
                    }
                }
                cancelAnimationFrame(x);
                x = requestAnimationFrame(A);
            };
        n(document).ready(function() {
            z();
            B();
        });
        n(window).resize(function() {
            z();
            B();
        });
    }
})(jQuery);