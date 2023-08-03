'use strict';
document.addEventListener('DOMContentLoaded',()=>{
 //Cardクラスの作成 
 class Card{
  constructor(suit,num){
    //カードのスート(s:スペード,d:ダイヤ...)
    this.suit=suit;
    //カードの数字(1,2,3,....13);
    this.num=num;
    //カードの画像パス
    this.front=`${suit}${num<10?"0":""}${num}.gif`;
  }
 }
 //カード配列作成
 const cards=[];
 //カードスーツ配列
 const suits=["s","d","h","c"];
 //2重forで52枚のカードを作成
 for(let i=0;i<suits.length;i++){
  for(let j=1;j<=13;j++){
    //カードインスタンス生成
    let card = new Card(suits[i],j);
    cards.push(card);
  }
 }
 let firstCard=null;//1枚目のカードを保持(引いてない場合はnull)
 let secondCard=null;
 //クリックした際の関数を定義
 const flip=(eve)=>{
  const div = eve.target;
  //div.classList.toggle("back");
  //表面のカードや３枚目のカードをクリックしても何も起こらない
  if(!div.classList.contains("back") || secondCard !==null){
    return;
  }
  //表にする
  div.classList.remove("back");
  //もしそれが1枚目だったらfirstCardに代入
  if(firstCard === null){
    firstCard = div;
  }else{
    //２枚目のカードをsecondCardに代入
    secondCard=div;
    //2枚の数字が同じだったら
    if(firstCard.num === secondCard.num){
      firstCard.classList.add("fadeout");
      secondCard.classList.add("fadeout");
      //firstもsecondもnullに戻す
      [firstCard,secondCard]=[null,null];
    }else{
      //不正解だった場合は1.2秒後に裏面に戻す
      setTimeout(()=>{
        firstCard.classList.add("back");
        secondCard.classList.add("back");
        [firstCard,secondCard]=[null,null];
      },1200);
    }
  }
 };
 //cardgridのDOM取得
 const cardgrid=document.getElementById("cardgrid");
 const initgrid=()=>{
  //cardgridに入っている要素を全て削除
  cardgrid.textContent=null;
  for(let i=0;i<suits.length;i++){
    for(let j=0;j<13;j++){
      //div要素作成
      let div = document.createElement("div");
      //配列からカードを取り出す
      let card = cards[i*13+j];
      //div.textContent=card.suit+":"+card.num;
      
      //背景画像に画像を設定
      div.style.backgroundImage=`url(images/${card.front})`;

      //divにcardクラス追加
      div.classList.add("card","back");
      //画像をクリックした際の挙動を設定
      div.onclick=flip;
      //divにnumプロパティを定義して、そこの数字を保存
      div.num=card.num;
      //cardgridに要素を追加
      cardgrid.append(div);

    }
  }
 };
 //カードシャッフル関数(Fisher-Yates shuffle)
 const shuffle=()=>{
  let i = cards.length;
  while(i){
    let index = Math.floor(Math.random()*i--);
    [cards[index],cards[i]]=[cards[i],cards[index]];
    /*
    let a = 10;
    let b = 20;
    [a,b] = [b,a];//分割代入
    console.log(a);//20

    */
  }
 };
 //ボタンDOMの取得
 const startBt=document.getElementById("startBt");
 startBt.addEventListener("click",()=>{
  shuffle();
  initgrid();
 });
});