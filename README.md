# 디즈니플러스 클론 코딩

[프로젝트 보러가기! 👍](https://disneyplusclone-c04df.web.app/)

## 사용언어는 ?

> React, TypeScript

## 사용 패키지 || 라이브러리는 ?

> firebase, react-router-dom, styled-components, redux-toolkit,react-slick

## 👀 어떤 모습으로 개발이 되었나?

|             |                                          개발된 이미지                                           |
| ----------: | :----------------------------------------------------------------------------------------------: |
|      인덱스 | ![](https://images.velog.io/images/hoon_dev/post/a9dac9e3-8010-448e-907b-8dad78bd0d8a/image.png) |
|          홈 | ![](https://images.velog.io/images/hoon_dev/post/09d11153-e45d-4d06-b26e-ec134faf7e5d/image.png) |
| 비디오 상세 | ![](https://images.velog.io/images/hoon_dev/post/b3aef7ff-dcd4-4367-b7f1-8f7e1e6228d7/image.png) |
|    로그아웃 | ![](https://images.velog.io/images/hoon_dev/post/d7cdafda-f66c-494f-b82f-01c5f1ca925d/image.png) |

## 🕹 기능정보

---

### 1. 구글로그인

- Firebase Auth를 사용하여 구글 로그인 기능 구현

```ts
auth.onAuthStateChanged(function (user) {
  if (user) {
    const userData: UserState = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };
    dispatch(setUserLoginDetails(userData));
  } else {
    Swal.fire({
      text: "로그인을 해주세요",
      confirmButtonColor: "#0483ee",
      confirmButtonText: "확인",
    });
  }
});
```

### 2. 슬라이드 구현

- react-slick 사용하여 슬라이드 구현

```ts
let settings: SliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpeg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scale.jpeg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpeg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scales.jpeg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};
```

### 3. FireStore 에 들어가있는 타입별 비디오 정보 가져오기

- switch case 분기문으로 타입별로 reudx 상태값에 저장

```ts
useEffect(() => {
  db.collection("movies").onSnapshot((snapshot) => {
    snapshot.docs.map((doc) => {
      let data = { id: doc.id, ...doc.data() };
      switch (doc.data().type) {
        case "recommend":
          recommends.push(data);
          break;
        case "trending":
          trendings.push(data);
          break;
        case "original":
          originals.push(data);
          break;
        case "new":
          newDisneys.push(data);
          break;
      }
    });
    dispatch(
      setMovies({
        recommend: recommends,
        trending: trendings,
        original: originals,
        new: newDisneys,
      })
    );
  });
}, []);
```

### 4. 로그아웃

- firebase 로그아웃

```ts
const handleSignOut = () => {
  auth
    .signOut()
    .then(() => {
      dispatch(setSignOutState());
      history.push("/");
    })
    .catch((error) => alert(error.message));
};
```

---

😎 감사합니다 :)
