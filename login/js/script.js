const id1 = document.getElementById('login-id');
let regID = /^[A-Z][a-zA-Z0-9]{4,}$/;
const id1Msg = document.getElementById('login-id-alert');

id1.addEventListener('blur', function () {
    if (!regID.test(id1.value)) {
        id1Msg.style.color = 'red';
        id1Msg.innerHTML = '아이디는 5글자 이상 첫글자는 대문자 영문자 숫자만 가능';
        id1.value = '';
    } else {
        id1Msg.style.color = 'green';
        id1Msg.innerHTML = '사용가능한 아이디입니다';
    }
})

// 비밀번호
const pw1 = document.getElementById('login-pw');
let regPW1 = /^.*(?=^.{8,16})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).*$/;
const pw1Msg = document.getElementById('login-pw-alert');

pw1.addEventListener('blur', function () {
    if (!regPW1.test(pw1.value)) {
        pw1Msg.style.color = 'red'
        pw1Msg.innerHTML = '특수문자 문자 숫자 포함하고 8자이상 16자 미만 가능';
        pw1.value = '';
    } else {
        pw1Msg.style.color = 'green'
        pw1Msg.innerHTML = '올바른 비밀번호입니다';
    }
})

// 비밀번호확인
const pw2 = document.getElementById('login-pw2');
const pw2Msg = document.getElementById('login-pw-alert2');

pw2.addEventListener('blur', function () {
    if (pw1.value != pw2.value) {
        pw2Msg.style.color = 'red';
        pw2Msg.innerHTML = '비밀번호가 같지 않습니다';
        pw2.value = '';
    } else if (pw2.value == '') {
        pw2Msg.style.color = 'red';
        pw2Msg.innerHTML = '비밀번호를 입력하세요';
    } else {
        pw2Msg.style.color = 'green';
        pw2Msg.innerHTML = '비밀번호가 일치합니다';
    }
})

// 이메일
const email1 = document.getElementById('login-email');
let regEmail1 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const emailMsg = document.getElementById('login-email-alert');

email1.addEventListener('blur', function () {
    if (!regEmail1.test(email1.value)) {
        emailMsg.style.color = 'red';
        emailMsg.innerHTML = '올바르지않은 이메일입니다';
        email1.value = '';
    } else {
        emailMsg.style.color = 'green';
        emailMsg.innerHTML = '올바른 이메일입니다';
    };
})

// 전화번호
const tel = document.getElementById('login-number');
let regTel = /^\d{3}-\d{3,4}-\d{4}$/;
const telMsg = document.getElementById('login-number-alert');

tel.addEventListener('blur', function () {
    if (!regTel.test(tel.value)) {
        telMsg.style.color = 'red';
        telMsg.innerHTML = '올바르지않은 전화번호입니다';
        tel.value = '';
    } else {
        telMsg.style.color = 'green';
        telMsg.innerHTML = '올바른 전화번호 입니다!';
    };
})

//회원가입버튼
document.getElementById('submit').addEventListener('blur', function () {
    if (id1.value == '') {
        id1Msg.style.color = 'red';
        id1Msg.innerHTML = '아이디를입력하세요';
        return false;
    } else {
        if (!regID.test(id1.value)) {
            id1Msg.style.color = 'red';
            id1Msg.innerHTML = '아이디는 5글자 이상 첫글자는 대문자 영문자 숫자만 가능';
            id1.value = '';
            return false;
        } else {
            if (pw1.value == '') {
                pw1Msg.style.color = 'red';
                pw1Msg.innerHTML = '비밀번호를 입력하새요';
                return false;
            } else {}
        }
    }
})