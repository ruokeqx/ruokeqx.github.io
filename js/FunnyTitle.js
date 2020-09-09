<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "http://www.jojo-m.cn/medias/logo.jpg");
         document.title = 'ヽ(●-`Д´-)ノ坏掉惹';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "http://www.jojo-m.cn/medias/logo.jpg");
         document.title = 'ヾ(Ő∀Ő3)ノ好哦！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
