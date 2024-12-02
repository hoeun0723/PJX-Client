declare global {
  interface Window {
    Kakao: any;
  }
};

const shareKakao = () => {
  const nickname = localStorage.getItem('nickname');
  const url = import.meta.env.PROD ? import.meta.env.VITE_APP_URL : import.meta.env.VITE_LOCAL_URL;
  if(window.Kakao){
    const kakao = window.Kakao;
    if(!kakao.initialized) {
      kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${nickname}님의 한달 지출 내역`,
        description: '친구의 이번 달 지출 달력을 확인해보세요',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '친구의 지출 보러가기',
          link: {
            mobileWebUrl: `${url}/home`,
            webUrl: `${url}/home`,
          },
        },
      ],
    });
  }
}

export default shareKakao;