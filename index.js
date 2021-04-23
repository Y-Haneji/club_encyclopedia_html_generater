//やること
//アイコンがない場合の例外処理

GROUP_LIST = [
  ["ソフトテニス部","体育会","","","https://twitter.com/hiz_LGM","https://www.instagram.com/_hizume","","hizume.jpg","1"],
  ["新入生サポート事務局","生協系","","","https://twitter.com/ku_shinsapo2020","","","新入生サポート事務局.jpg","100"],
  ["あらんじぇ","生協系","https://www.s-coop.net/arranger/","","https://twitter.com/arranger_coop","","","","200"]
]

$(function(){
  $container = $('<div class="container">'); // 全てのサークルの情報をまとめて格納するdivタグを生成
  var preGroup = "";

  for (const e of GROUP_LIST) {
    var name = e[0];
    var group = e[1];
    var home = e[2];
    var LINE = e[3];
    var Twitter = e[4];
    var Instagram = e[5];
    var Facebook = e[6];
    var icon = e[7];
    var page = e[8];

    if (preGroup != group) {
      preGroup = group;
      var $heading = $('<div class="heading" id=' + group + '>'); 
      $heading.append($('<h1>').text(group));
      $container.append($heading);
    }
    var $sns = $('<div class="sns">'); // リンク一覧を格納するdivタグを生成
    function makeLink(link, snsName, img, imgNoLink) { // SNSへのリンクのaタグを生成し、$snsへ格納する関数(リンク, クラス名)
      var $snsLink = $('<a>').attr({
        href: link
      });
      if(link == "") { // リンクが空ならnoLinkというクラスをつける
        $snsLink.addClass("noLink");
        $snsLink.append($('<div class=' + snsName + '>').append('<img src=' + imgNoLink + ' class="snsImage">'));
      } else {
        $snsLink.append($('<div class=' + snsName + '>').append('<img src=' + img + ' class="snsImage">'));
      }
      $sns.append($snsLink);
    }
    // 各SNSへのリンクのaタグを生成
    makeLink(home, "home", "img/logo/colored/home.png", "img/logo/gray/home.png");
    makeLink(LINE, "line", "img/logo/colored/LINE.png", "img/logo/gray/LINE.png");
    makeLink(Twitter, "twitter", "img/logo/colored/Twitter.png", "img/logo/gray/Twitter.png");
    makeLink(Instagram, "instagram", "img/logo/colored/Instagram.png", "img/logo/gray/Instagram.png");
    makeLink(Facebook, "facebook", "img/logo/colored/Facebook.png", "img/logo/gray/Facebook.png");

    var $box = $('<div class="box">'); // 1つのサークルの情報をまとめて格納するdivタグを生成
    $box.append($('<div class="group">').append($('<a>').attr({href: '#' + group}).text(group))); // ジャンル
    if(icon == "") { // アイコンが空ならグレーアウト
      $box.append($('<div class="name">').append($('<div class="noIconParent">')).append($('<div class="noIcon">')).append($('<p>').text(name)).append($('<p class="page">').text('p' + page))); // サークル名
    } else {
      $box.append($('<div class="name">').append($('<img src="img/icon/' + icon + '" class="icon">')).append($('<p>').text(name)).append($('<p class="page">').text('p' + page))); // サークル名
    }
    $box.append($sns); // snsへのリンク一覧

    $container.append($box);
  };

  $('body').append($container); // 生成した$containerをhtmlに返す
})
