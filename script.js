function load(){
  const spinner = document.getElementById('spinner');
  const text = document.getElementById('text');

  text.innerText = '';
  spinner.style.display = 'block';

  setTimeout(()=>{
    spinner.style.display = 'none';
    text.innerText = 'Data loaded successfully ✔';
  }, 2000);
}
