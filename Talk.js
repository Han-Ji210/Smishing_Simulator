document.addEventListener('DOMContentLoaded', function() {
    // 스미싱 문자 예시 데이터
    const smishingExamples = {
        'contact1': { name: '은행 사칭 경고', image: 'smishing1.jpg', messages: [
            {text: "고객님의 계좌가 동결되었습니다. 아래 링크를 클릭하여 확인해 주세요.", from: "sender"},
            {text: "긴급 공지: 카드가 임의로 사용되었습니다. 확인 바랍니다.", from: "sender"}
        ]},
        'contact2': { name: '택배 사칭 알림', image: 'smishing2.jpg', messages: [
            {text: "택배가 도착했습니다. 수령을 원하시면 링크를 클릭하세요.", from: "sender"},
            {text: "배송이 완료되었습니다. 배송 확인을 위해 링크를 클릭해주세요.", from: "sender"}
        ]},
        // 여기에 더 많은 스미싱 예제 추가 가능
    };

    // URL에서 contactId 쿼리 파라미터 가져오기
    function getContactId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('contactId');
    }

    // 스미싱 예제 데이터를 페이지에 적용
    const contactId = getContactId();
    if (contactId && smishingExamples[contactId]) {
        const example = smishingExamples[contactId];
        document.getElementById('contact-name').textContent = example.name;
        document.getElementById('contact-image').src = example.image;

        // 메시지를 동적으로 생성하여 페이지에 추가
        const messageContainer = document.getElementById('message-container');
        example.messages.forEach(msg => {
            const messageElement = document.createElement('div');
            messageElement.classList.add(msg.from === 'sender' ? 'message-sender' : 'message-receiver');
            messageElement.textContent = msg.text;
            messageContainer.appendChild(messageElement);
        });
    } else {
        console.log('해당하는 contactId가 존재하지 않습니다.');
    }
});