// ! 参数：打算在页面加载完毕时执行的函数的名称
// 1. 把现有的 window.onload 事件处理函数的值存入变量oldonlod
// 2. if 在这个处理函数上还没有绑定函数,就像平时一样将新函数赋给它
// 3. if 在这个处理函数上已经绑定的有函数,就把新函数追加到现有的指令的结尾
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    };
  }
}
// ! 未提供insertAfter，自行构建
// 插入到指定元素位置之前 parentElement.insertBefore(newElement,targetElement)
// parentElement => targetElement.parentNode
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  // 检查目标元素是不是 parent 的最后一个元素
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}
// 添加 class 类
function addClass(element, value) {
  if (!element.className) {
    element.className = value;
  } else {
    element.className += ' ' + value;
  }
}

// ? 功能1 Tab栏当前页面项高亮显示 -> all
// 不同于之前的Tab栏设计，本项目中的不同Tab栏代表不同Html文件
function highlightPage() {
  if (!document.getElementsByTagName || !document.getElementById) return false;
  var headers = document.getElementsByTagName('header');
  if (headers.length == 0) return false;
  var navs = headers[0].getElementsByTagName('nav');
  if (navs.length == 0) return false;
  // 取得导航链接，遍历
  var links = navs[0].getElementsByTagName('a');
  var linkurl;
  for (var i = 0; i < links.length; i++) {
    // 比较当前连接的URL(使用getAttribute('href'))和当前页面的URL(使用window.location.href)
    linkurl = links[i].getAttribute('href');
    if (window.location.href.indexOf(linkurl) != -1) {
      links[i].className = 'here';
      var linktext = links[i].lastChild.nodeValue.toLowerCase();
      document.body.setAttribute('id', linktext);
    }
  }
}

// ? 功能2 预览小窗以幻灯片的方式显示链接示意图 -> index
// 移动元素 传入需要移动的元素、终点坐标、延时时间
function moveElement(elementID, final_x, final_y, interval) {
  if (!document.getElementById || !document.getElementById(elementID)) {
    return false;
  }
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.top) {
    preview.style.top = '0px';
  }
  if (!elem.style.left) {
    preview.style.left = '0px';
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  var dist = 0;
  if (xpos == final_x && ypos == final_y) {
    return true;
  } else {
    if (xpos < final_x) {
      dist = Math.ceil((final_x - xpos) / 10);
      xpos = xpos + dist;
    } else if (xpos > final_x) {
      dist = Math.ceil((xpos - final_x) / 10);
      xpos = xpos - dist;
    }
    if (ypos < final_y) {
      dist = Math.ceil((final_y - ypos) / 10);
      ypos = ypos + dist;
    } else if (ypos > final_y) {
      dist = Math.ceil((ypos - final_y) / 10);
      ypos = ypos - dist;
    }
    //   将变更后的坐标赋给属性
    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'PX';
  }
  // 将 repeat 变量定义为函数，进行再次调用
  var repeat = 'moveElement("' + elementID + '",' + final_x + ',' + final_y + ',' + interval + ')';
  elem.movement = setTimeout(repeat, interval);
}
// 创建&插入预览小窗
function displaySlideshow() {
  var slideshow = document.createElement('div');
  slideshow.setAttribute('id', 'slideshow');
  var frame = document.createElement('img');
  frame.setAttribute('src', 'images/frame.gif');
  frame.setAttribute('alt', '');
  frame.setAttribute('id', 'frame');
  slideshow.appendChild(frame);
  var preview = document.createElement('img');
  preview.setAttribute('src', 'images/slideshow.gif');
  preview.setAttribute('alt', 'a glimpse of what awaits you');
  preview.setAttribute('id', 'preview');
  slideshow.appendChild(preview);
  var intro = document.getElementById('intro');
  insertAfter(slideshow, intro);
}
// 获取链接，绑定事件
function prepareSlideshow() {
  if (!document.getElementsByTagName || !document.getElementById || !document.getElementById('intro')) {
    return false;
  }
  displaySlideshow();
  // 取得列表中的所有链接
  var links = document.getElementsByTagName('a');
  var destination;
  // 为 mouseover 事件添加动画效果
  for (var i = 0; i < links.length; i++) {
    links[i].onmouseover = function () {
      destination = this.getAttribute('href');
      if (destination.indexOf('index.html') != -1) moveElement('preview', 0, 0, 5);
      if (destination.indexOf('about.html') != -1) moveElement('preview', -150, 0, 5);
      if (destination.indexOf('photos.html') != -1) moveElement('preview', -300, 0, 5);
      if (destination.indexOf('live.html') != -1) moveElement('preview', -450, 0, 5);
      if (destination.indexOf('contact.html') != -1) moveElement('preview', -600, 0, 5);
    };
    //  回归
    links[i].onmouseout = function () {
      moveElement('preview', 0, 0, 15);
    };
  }
}

// ? 功能3 About页面选择性显示某一个 section -> About
// 切换，其他兄弟元素 none 自己 block
function showSection(id) {
  var section = document.getElementsByTagName('section');
  for (var i = 0; i < section.length; i++) {
    if (section[i].getAttribute('id') != id) {
      section[i].style.display = 'none';
    } else {
      section[i].style.display = 'block';
    }
  }
}
// 获取链接本地地址属性，与section id比较
function prepareInternalnav() {
  if (!document.getElementsByTagName || !document.getElementById) return false;
  var articles = document.getElementsByTagName('article');
  var navs = articles[0].getElementsByTagName('nav');
  if (!articles.length || !navs.length) return false;
  var links = navs[0].getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    // split 以指定分隔符将字符串分开为多个字符串
    var linkhref = links[i].getAttribute('href').split('#')[1];
    //  不存在此ID的section则进入下一次循环
    if (!document.getElementById(linkhref)) continue;
    document.getElementById(linkhref).style.display = 'none';
    //  作用域问题：linkhref 是一个局部变量，prepareInternalnav 执行时存在，等到事件处理函数时就不存在了；此处使用自定义属性的方法
    links[i].destination = linkhref;
    links[i].onclick = function () {
      showSection(this.destination);
      return false;
    };
  }
}

// ? 功能4 图片库，类似ch7所实现 -> Photos
// 点击后设置 placeholder 的图片和 description 文字
function showPic(whichpic) {
  if (!document.getElementById('placeholder')) {
    return false;
  }
  // DOM Core 中的方法
  var source = whichpic.getAttribute('href');
  var placeholder = document.getElementById('placeholder');
  placeholder.setAttribute('src', source);
  if (document.getElementById('description')) {
    var text = whichpic.getAttribute('title') ? whichpic.getAttribute('title') : '';
    var description = document.getElementById('description');
    description.firstChild.nodeValue = text;
  }
  return true;
}
// 加载时新建 Placeholder 和 description
function preparePlaceholder() {
  // 创建img并设置属性值
  var placeholder = document.createElement('img');
  placeholder.setAttribute('id', 'placeholder');
  placeholder.setAttribute('src', 'images/placeholder.gif');
  placeholder.setAttribute('alt', 'my image gallery');
  // 创建 p 并设置属性值
  var description = document.createElement('p');
  description.setAttribute('id', 'description');
  // 创建 p 里边的 文本
  var desctext = document.createTextNode('Choose an image.');
  description.appendChild(desctext);
  insertAfter(description, document.getElementById('imagegallery'));
  insertAfter(placeholder, description);
}
// 点击事件函数
function prepareGallery() {
  // 判断是否可以用相应DOM方法
  if (!document.getElementsByTagName || !document.getElementById || !document.getElementById('imagegallery')) {
    return false;
  }
  preparePlaceholder();
  var gallery = document.getElementById('imagegallery');
  var links = gallery.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      // 此处的 this 是 links[i]; links[i] 对应节点列表(links数组)的特定(第i个)节点
      return !showPic(this);
    };
  }
}

// ? 功能5 斑马线显示行 -> live
// 为奇数行(不包括表头行)添加 odd 类
function stripeTables() {
  if (!document.getElementsByTagName) return false;
  var tables = document.getElementsByTagName('table');
  var odd, rows;
  for (var i = 0; i < tables.length; i++) {
    odd = false;
    rows = tables[i].getElementsByTagName('tr');
    for (var j = 0; j < rows.length; j++) {
      if (odd == true) {
        addClass(rows[j], 'odd');
        odd = false;
      } else {
        odd = true;
      }
    }
  }
}
// 高亮效果
function highlightRows() {
  if (!document.getElementsByTagName) return false;
  var rows = document.getElementsByTagName('tr');
  for (var i = 0; i < rows.length; i++) {
    rows[i].oldClassName = rows[i].className;
    rows[i].onmousemove = function () {
      addClass(this, 'highlightrow');
    };
    rows[i].onmouseout = function () {
      this.className = this.oldClassName;
    };
  }
}
function displayAbbreviations() {
  // 判断是否可以用相应DOM方法
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  // 获取所有的 abbr 元素
  var abbreviations = document.getElementsByTagName('abbr');
  // 如果不存在 abbr 元素(个数为0)，函数结束返回false
  if (abbreviations.length < 1) return false;
  // 保存每个 abbr 元素提供的信息
  var defs = new Array();
  for (var i = 0; i < abbreviations.length; i++) {
    var definition = abbreviations[i].getAttribute('title');
    var key = abbreviations[i].lastChild.nodeValue;
    defs[key] = definition;
  }
  // 创建 dl 列表
  var dlist = document.createElement('dl');
  for (key in defs) {
    var definition = defs[key];
    var dtitle = document.createElement('dt');
    var dtitle_text = document.createTextNode(key);
    dtitle.appendChild(dtitle_text);
    var ddesc = document.createElement('dd');
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }
  if (dlist.childNodes.length < 1) return false;
  var header = document.createElement('h3');
  header.appendChild(document.createTextNode('Abbreviations'));
  var article = document.getElementsByTagName('article')[0];
  article.appendChild(header);
  article.appendChild(dlist);
}

// ? 功能6 form表单 => 依赖Browser原生，不额外添加
//调用
function prepareForms() {
  for (var i = 0; i < document.forms.length; i++) {
    var thisform = document.forms[i];
    thisform.onsubmit = function () {
      var article = document.getElementsByTagName('article')[0];
      if (submitFormWithAjax(this, article)) return false;
      return true;
    };
  }
}

// ? 功能7 Ajax
// 通过对象检测获取技术检测了XMLHttpRequest
// 返货一个XMLHttpRequest 对象
function getHTTPObject() {
  if (typeof XMLHttpRequest == 'undefined')
    XMLHttpRequest = function () {
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.6.0');
      } catch (e) {}
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0');
      } catch (e) {}
      try {
        return new ActiveXObject('Msxml2.XMLHTTP');
      } catch (e) {}
      return false;
    };
  return new XMLHttpRequest();
}
// 接受一个DOM元素作为参数，然后把它的所有子元素都删除
function displayAjaxLoading(elem) {
  while (elem.hasChildNodes()) {
    elem.removeChild(elem.lastChild);
  }
  var content = document.createElement('img');
  content.setAttribute('src', 'images/loading.gif');
  content.setAttribute('alt', 'Loading...');
  elem.appendChild(content);
}
// 1.调用displayAjaxLoading，删除目标元素(thetarget)的所有子元素并添加图像
// 2.把表单的值组织成URL编码的字符串，以便通过Ajax发送
// 3.创建方法为POST的Ajax请求，把表单的值发送给submit.html
// 4.如果请求成功，解析响应并在目标元素中显示结果
// 5.如果失败，显示错误消息
function submitFormWithAjax(whichform, thetarget) {
  var request = getHTTPObject();
  if (!request) return false;
  displayAjaxLoading(thetarget);
  var dataParts = [];
  var elem;
  for (var i = 0; i < whichform.elements.length; i++) {
    elem = whichform.elements[i];
    dataParts[i] = elem.name + '=' + encodeURIComponent(elem.value);
  }
  var data = dataParts.join('&');
  request.open('POST', whichform.getAttribute('action'), true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200 || request.status === 0) {
        var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
        if (matches.length > 0) {
          thetarget.innerHTML = matches[1];
        } else {
          thetarget.innerHTML = '<p>Opps, there was an error. Sorry.</p>';
        }
      } else {
        thetarget.innerHTML = '<p>' + request.statusText + '</p>';
      }
    }
  };
  request.send(data);
  return false;
}

addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);
addLoadEvent(prepareInternalnav);
addLoadEvent(prepareGallery);
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);
addLoadEvent(prepareForms);
