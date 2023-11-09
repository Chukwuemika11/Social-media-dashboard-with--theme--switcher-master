const toggle = document.querySelector('.toggle');
const changeToggleColor = document.querySelector('.changeToggleColor');
const round = document.querySelector('.round');
let isDarkMode = false;

toggle.addEventListener('click', function () {
  isDarkMode = !isDarkMode;

  if (isDarkMode === true) {
    document.body.style.backgroundColor = 'hsl(230, 17%, 14%)';
    round.style.left = '27.5px'; // Adjust as needed for the new position
  } else {
    document.body.style.backgroundColor = '#ffffff';
    round.style.left = '2.5px'; // Return to the original position
  }

  changeToggleColor.style.backgroundColor = isDarkMode? 'blue' : '#000';

  const year1 = document.querySelector(".year1");
  year1.style.color = isDarkMode? '#fff' : '#000';

  const year2 = document.querySelector(".year2");
  year2.style.color = isDarkMode? '#fff' : '#000';

  const year3 = document.querySelector(".year3");
  year3.style.color = isDarkMode? '#fff' : '#000';

  const year4 = document.querySelector(".year4");
  year4.style.color = isDarkMode? '#fff' : '#000';

  const dashboard = document.querySelector(".dashboard");
  dashboard.style.color = isDarkMode? '#fff' : '#000';

  const overview = document.querySelector(".overview");
  overview.style.color = isDarkMode? '#fff' : '#000';

  const number87 = document.querySelector(".number87");
  number87.style.color = isDarkMode? '#fff' : '#000';

  const number52 = document.querySelector(".number52");
  number52.style.color = isDarkMode? '#fff' : '#000';
  
  const number5462 = document.querySelector(".number5462");
  number5462.style.color = isDarkMode? '#fff' : '#000';

  const number52k = document.querySelector(".number52k");
  number52k.style.color = isDarkMode? '#fff' : '#000';

  const number117 = document.querySelector(".number117");
  number117.style.color = isDarkMode? '#fff' : '#000';

  const number507 = document.querySelector(".number507");
  number507.style.color = isDarkMode? '#fff' : '#000';

  const number107 = document.querySelector(".number107");
  number107.style.color = isDarkMode? '#fff' : '#000';

  const number1407 = document.querySelector(".number1407");
  number1407.style.color = isDarkMode? '#fff' : '#000';

//     const firstRowBox = document.querySelector(".firstRowBox");
  
//   firstRowBox.addEventListener('mouseenter', function () {
//     firstRowBox.classList.add ('second-row-box:hover'); // Change the background color on hover
//   });
  
  

//   const firstRowBox = document.querySelector(".firstRowBox");
  
//   firstRowBox.addEventListener('mouseenter', function () {
//     firstRowBox.style.backgroundColor =  'hsl(230, 17%, 20%)'; // Change the background color on hover
//   });
  
//   firstRowBox.addEventListener('mouseleave', function () {
//     firstRowBox.style.backgroundColor = 'hsl(230, 17%, 14%)'; // Reset the background color on mouse leave
//   });

//   const firstRowBox2 = document.querySelector(".firstRowBox2");
  
//   firstRowBox2.addEventListener('mouseenter', function () {
//     firstRowBox2.style.backgroundColor =  'hsl(230, 17%, 20%)'; // Change the background color on hover
//   });
  
//   firstRowBox2.addEventListener('mouseleave', function () {
//     firstRowBox2.style.backgroundColor = 'hsl(230, 17%, 14%)'; // Reset the background color on mouse leave
//   });


//   const firstRowBox3 = document.querySelector(".firstRowBox3");
  
//   firstRowBox3.addEventListener('mouseenter', function () {
//     firstRowBox3.style.backgroundColor =  'hsl(230, 17%, 20%)'; // Change the background color on hover
//   });
  
//   firstRowBox3.addEventListener('mouseleave', function () {
//     firstRowBox3.style.backgroundColor = 'hsl(230, 17%, 14%)'; // Reset the background color on mouse leave
//   });


//   const firstRowBox4 = document.querySelector(".firstRowBox4");
  
//   firstRowBox4.addEventListener('mouseenter', function () {
//     firstRowBox4.style.backgroundColor =  'hsl(230, 17%, 20%)'; // Change the background color on hover
//   });
  
//   firstRowBox4.addEventListener('mouseleave', function () {
//     firstRowBox4.style.backgroundColor = 'hsl(230, 17%, 14%)'; // Reset the background color on mouse leave
//   });



});


/* - White (BG): hsl(0, 0%, 100%)
- Very Pale Blue (Top BG Pattern): hsl(225, 100%, 98%)
- Light Grayish Blue (Card BG): hsl(227, 47%, 96%)
- Dark Grayish Blue (Text): hsl(228, 12%, 44%)
- Very Dark Blue (Text): hsl(230, 17%, 14%) */