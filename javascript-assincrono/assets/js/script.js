const url = 'https://thatcopy.pw/catapi/rest/';
const btnChangeCat = document.querySelector('#change-cat');
const catImg = document.querySelector('#cat');

const getCats = async () => {
  try {
    const data = await fetch(url);
    const dataJson = await data.json();

    return dataJson.webpurl;
  } catch (error) {
    console.log(error);
  }
}

btnChangeCat.addEventListener('click', async () => {
  const imgReceived = await getCats();

  catImg.src = imgReceived;
});

window.onload = async () => {
  catImg.src = await getCats();
}