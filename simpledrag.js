simpledrag = (function() {
    var draglist = []
    var dragsort = []
    f = function(ele, name, color, l, t) {
        var osy
        var _osy
        var msx
        var msy
        var osx
        var _osx

        var thisdrag = []
        draglist.push(thisdrag)
        var a = document.createElement("div")
        dragsort.push(a)
        a.onmousedown = ()=>{
            dragsort = dragsort.filter(n=>!a.isSameNode(n))
            dragsort.push(a)
            dragsort.forEach((n,i)=>{
                n.style.zIndex = i - -3
            }
            )
        }

        var b = document.createElement("div")
        b.innerText = name
        b.style.width = "100%"
        b.style.backgroundColor = color
        a.style.border = "medium solid black"
        a.style.width = "auto"
        a.style.height = "auto"
        _osx = a.style.left = l | 0
        _osy = a.style.top = t | 0
        a.style.position = "absolute"
        a.appendChild(b)

        var w = document.createElement("div")
        w.appendChild(ele)
        a.appendChild(w)
        w.style.width = "auto"
        document.body.appendChild(a)

        b.onmousedown = (e)=>{

            msx = e.clientX;
            msy = e.clientY;

            osx = _osx
            osy = _osy

            thisdrag.push(onmousemove)
            return false;
        }

        var onmousemove = (e)=>{
            _osx = a.style.left = osx + e.clientX - msx
            _osy = a.style.top = osy + e.clientY - msy

        }

        return a
    }
    document.onmousemove = (e)=>{
        draglist.forEach((i)=>{
            if (i.length) {
                i[0](e)
            }
        }
        )
    }
    document.onmouseup = ()=>{
        draglist.forEach(i=>i.length = 0)
    }
    return f
}
)()
