// DC PJ 회원가입 페이지 컴포넌트

import { Link } from "react-router-dom";
import "../../css/member.css";
import { useId, useState } from "react";

// 로컬스토리지 생성 JS
import { clearData, initData } from "../func/mem_fn";

export function Member() {
  // 회원가입 페이지 요구사항
  // -> 각 입력항목별로 유효성검사를 실행함
  // -> 특이사항 : 글자를 입력할때마다 검사 + submit버튼 작동시 검사

  // [상태관리변수] ////////////////
  // [1] 입력요소 상태변수

  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd, setPwd] = useState("");
  // 3. 비밀번호확인변수
  const [chkPwd, setChkPwd] = useState("");
  // 4. 사용자이름변수
  const [userName, setUserName] = useState("");
  // 5. 이메일변수
  const [email, setEmail] = useState("");

  // [2] 에러상태관리 변수
  // -> 에러상태값 초기값은 에러아님(false)

  // 1. 아이디변수
  const [userIdError, setUserIdError] = useState("");
  // 2. 비밀번호변수
  const [pwdError, setPwdError] = useState("");
  // 3. 비밀번호확인변수
  const [chkPwdError, setChkPwdError] = useState("");
  // 4. 사용자이름변수
  const [userNameError, setUserNameError] = useState("");
  // 5. 이메일변수
  const [emailError, setEmailError] = useState("");

  // [아이디 관련 메시지 프리셋] //////
  const msgId = [
    "최소 5글자 이상 입력해 주세요",
    "이미 사용중인 아이디 입니다",
    "사용 가능한 아이디 입니다",
  ];

  // [기타 메세지 프리셋]
  const msgEtc = {
    // 비밀번호
    pwd: "5~15자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요",
    // 비밀번호 확인
    confPwd: "비밀번호가 일치하지 않습니다",
    // 이름(필수입력)
    req: "필수로 입력해 주세요",
    // 이메일
    email: "이메일 형식에 맞게 입력해 주세요",
  };

  // [3] 에러 메시지 상태변수
  const [idMsg, setIdMsg] = useState(msgId[0]);

  /////////////////////////////////////////

  // [ 유효성 검사 함수 ] //////////
  // 1. 아이디 유효성 검사
  const changeUserId = (e) => {
    // 1. 아이디 유효성 검사식(따옴표로 싸지 말것 !!!)
    const valid = /^[A-Za-z0-9+]{5,}$/;

    // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
    console.log(e.target.value);

    // 3. 에러아님 상태 if문
    // 조건 : 유효성 검사 결과가 true인가? 에러상태 아니면 false
    // 검사방법 : 정규식.test() -> 정규식 검사결과 리턴메서드
    // 결과 : true이면 에러상태값 false
    //      false이면 에러상태값 true
    if (valid.test(e.target.value)) {
      // 1. 사용중인 아이디인지 검사 (로컬쓰 셋팅후 추가)

        // 로컬스토리지 체크함수호출(없으면 생성함!)
      initData();

      // 1. 로컬스 변수할당
      let memData = localStorage.getItem("mem-data");

      // 2. 로컬스 객체변환
      memData = JSON.parse(memData);

      // 3. 기존 아이디가 있으면 상태값 false로 업데이트
      let isOK = true;

      // 4. 검사돌리기
      memData.forEach(v=>{
        // 기존 아이디와 같은경우
        if(v.uid===e.target.value){
            // 메시지 변경
            setIdMsg(msgId[1]);
            // 아이디 에러상태값 업데이트
            setUserIdError(true);
            // 존재여부 업데이트
            isOK=false;
        }
      }) /////////////// forEach /////////////////

      // 5. 기존 아이디 없으면 들어감 : 최종통과시 결과
      if(isOK){
        // 메시지 변경
        setIdMsg(msgId[0]);
        // 아이디 에러상태값 업데이트
        setUserIdError(false);
      }


    } /////////// if //////////////
    else {
      setUserIdError(true);
    }

    // 실제 userId 상태변수값이 업데이트 되어야만 화면에 출력됨
    setUserId(e.target.value);
  }; ///////////// changeUserId ////////////////

  // 2. 비밀번호 유효성 검사
  const changePwd = (e) => {
    // 1. 비밀번호 유효성 검사식(따옴표로 싸지 말것 !!!)
    const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
    // console.log(e.target.value)

    // 3. 에러에 따른 상태값 변경
    if (valid.test(e.target.value)) setPwdError(false);
    else setPwdError(true);

    // 4. 기존 입력값 반영하기
    setPwd(e.target.value);
  }; ////////////////////// changeUserPwd //////////////////////

  // 3. 비밀번호확인 유효성 검사
  const changeChkPwd = (e) => {
    // 1. 비밀번호 입력내용과 일치여부 확인
    if (pwd == e.target.value) setChkPwdError(false);
    else setChkPwdError(true);

    // 2. 기존 입력값 반영하기
    setChkPwd(e.target.value);
  }; ////////////////////// changeChkPwd //////////////////////

  // 4. 사용자 이름 유효성 검사
  const changeUserName = (e) => {
    // 1. 빈값체크
    if (e.target.value !== "") setUserNameError(false);
    else setUserNameError(true);

    // 2. 기존 입력값 반영하기
    setUserName(e.target.value);
  }; ////////////////////// changeUserName //////////////////////

  // 5. 이메일 유효성 검사
  const changeEmail = (e) => {
    // 1. 이메일 유효성 검사식(따옴표로 싸지 말것 !!!)
    const valid =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
    // console.log(e.target.value)

    // 3. 에러에 따른 상태값 변경
    if (valid.test(e.target.value)) setEmailError(false);
    else setEmailError(true);

    // 4. 기존 입력값 반영하기
    setEmail(e.target.value);
  }; ////////////////////// changeEmail //////////////////////

  // [ 전체 유효성 검사 체크 함수]
  const totalValid = () => {
    // 1. 모든 상태변수에 따른 에러 상태값 업데이트
    // -> 빈값인경우 에러처리함 !
    if (!userId) setUserIdError(true);
    if (!pwd) setPwdError(true);
    if (!chkPwd) setChkPwdError(true);
    if (!userName) setUserNameError(true);
    if (!email) setEmailError(true);

    // 2. 통과시 true, 불통과시 false 리턴처리
    // 통과조건 : 빈값아님 + 에러후크변수가 모두 false
    if (
      userId &&
      pwd &&
      chkPwd &&
      userName &&
      email &&
      !userIdError &&
      !pwdError &&
      !chkPwdError &&
      !userNameError &&
      !emailError
    )
      return true;
    // 하나라도 false이면 false를 리턴!
    else return false;
  }; ///////////// totalValid 함수 ///////////////

  // [서브밋 기능함수]
  const onSubmit = (e) => {
    // 1. 서브밋 기본이동 막기
    e.preventDefault();
    // 2. 유효성 검사 전체통과시
    if (totalValid()) {
      // alert("OK!")
      // 회원가입 정보를 로컬스토리지에 저장하기

      // 로컬스토리지 체크함수호출(없으면 생성함!)
      initData();

      // 1. 로컬스 변수할당
      let memData = localStorage.getItem("mem-data");

      // 2. 로컬스 객체변환
      memData = JSON.parse(memData);

      // 3. 새로운 데이터 구성하기
      let newData = {
        idx: memData.length+1,
        uid: userId,
        pwd: pwd,
        unm: userName,
        eml: email,
      };

      
      // 4. 데이터 추가하기 : 배열에 데이터추가 push()
      memData.push(newData);

      // 5. 로컬스에 반영하기
      localStorage.setItem("mem-data",JSON.stringify(memData))

      // 6. 로그인페이지로 이동 (라우터이동) -보류
    document.querySelector('.sbtn').innerText =
    "회원가입을 축하드립니다"

    } /////////// if /////////////
    // 3. 불통과시
    else {
      alert("입력란을 다시 확인해주세요!");
    }
  }; ////////////// onSubmit 함수 ////////////////
  // 리턴구역 ///
  return (
    <div className="outbx">
      {/* 회원가입 모듈코드 */}
      <section className="membx">
        <h2>에어비앤비에 오신 것을 환영합니다.</h2>
        <h2>회원 가입</h2>
        <form action="process.php" method="post">
          <ul>
            <li>
              {/* 1. 아이디 */}
              <label>아이디 : </label>
              <input
                type="text"
                maxLength="20"
                placeholder="아이디를 입력해 주세요"
                value={userId}
                onChange={changeUserId}
              />

              {
                // 에러일 경우 메시지 출력
                // 조건문 && 요소
                userIdError && (
                  <div className="msg">
                    <small style={{ color: "red", fontSize: "10px" }}>
                      {idMsg}
                    </small>
                  </div>
                )
              }
              {
                // 통과시 메시지 출력
                // 조건문 && 요소
                // 조건추가 : userId가 입력전일때 안보임 처리
                // userId가 입력전엔 false로 리턴됨!
                !userIdError && userId && (
                  <div className="msg">
                    <small style={{ color: "green", fontSize: "10px" }}>
                      {msgId[2]}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              {/* 2. 비밀번호 */}
              <label>비밀번호 : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="비밀번호를 입력해 주세요"
                value={pwd}
                onChange={changePwd}
              />
              {
                // 에러일 경우 메시지 출력
                // 조건문 && 요소
                pwdError && (
                  <div className="msg">
                    <small style={{ color: "red", fontSize: "10px" }}>
                      {msgEtc.pwd}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              {/* 3. 비밀번호 확인 */}
              <label>비밀번호확인 : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="비밀번호를 재입력해 주세요"
                value={chkPwd}
                onChange={changeChkPwd}
              />
              {
                // 에러일 경우 메시지 출력
                chkPwdError && (
                  <div className="msg">
                    <small style={{ color: "red", fontSize: "10px" }}>
                      {msgEtc.confPwd}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              {/* 4. 이름 */}
              <label>이름 : </label>
              <input
                type="text"
                maxLength="20"
                placeholder="이름을 입력해 주세요"
                value={userName}
                onChange={changeUserName}
              />
              {
                // 에러일 경우 메시지 출력
                userNameError && (
                  <div className="msg">
                    <small style={{ color: "red", fontSize: "10px" }}>
                      {msgEtc.req}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              {/* 5. 이메일 */}
              <label>이메일 : </label>
              <input
                type="text"
                maxLength="50"
                placeholder="이메일을 입력해 주세요"
                value={email}
                onChange={changeEmail}
              />
              {
                // 에러일 경우 메시지 출력
                emailError && (
                  <div className="msg">
                    <small style={{ color: "red", fontSize: "10px" }}>
                      {msgEtc.email}
                    </small>
                  </div>
                )
              }
            </li>
            <li style={{ overflow: "hidden" }}>
              {/* 6. 버튼 */}
              <button className="sbtn" onClick={onSubmit}>
                제출
              </button>
            </li>
            <li>
              {/* 7. 로그인페이지 링크 */}
              이미 회원이십니까?
              <Link to="/login">로그인 하기</Link>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
} ////////////// Member 컴포넌트 /////////////////
