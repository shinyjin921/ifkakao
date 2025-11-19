const sec03Elem = document.querySelector('#section-3');

const sec03_slideInit = ()=>{
  let current = 0;
  const IMG_WIDTH = 300; //카드 이미지 width size
  const cardListElem = sec03Elem.querySelector('.card-list');
  const TOTAL_SIZE = cardListElem.children.length;
  //한페이지에 보이는 카드의 개수:Math.floor(전체/300)
  const VIEW_COUNT = Math.floor(sec03Elem.clientWidth/IMG_WIDTH);

  //함수 선언
  const listGoto = ()=>{
    cardListElem.style.transition= '0.5s';
    cardListElem.style.transform=`translateX(-${current*IMG_WIDTH}px)`;
  }
  //1.왼쪽버튼버튼을 클릭했을때
  const prevBtn = sec03Elem.querySelector('.prev');
  prevBtn.addEventListener ('click',()=>{
    current --;
    if(current <= 0 ){ current = 0; }
    listGoto();
  });
  //1.오른쪽 버튼을 클릭했을때
  const nextBtn = sec03Elem.querySelector('.next');
    nextBtn.addEventListener ('click',()=>{
    //오른쪽 버튼을 누르면 왼쪽 방향으로 card-list가 이동-IMG_WIDTH 값 만큼
    current++;
    const MAX = TOTAL_SIZE - VIEW_COUNT;
      if( current >= MAX ){current = MAX;}
    listGoto();
  });
}
sec03_slideInit();

//Math.floor(값)소수점은 버리는 함수 <가장 많이 사용
//Math.ceil()  소수점을 올리는 함수
//Math.round()소수점 반올림 하는 함수
