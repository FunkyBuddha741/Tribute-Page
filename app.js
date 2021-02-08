// const body = document.body;
// body.style.background = 'black'
// const header = document.createElement('header');
// body.appendChild(header);
// const div1 = document.createElement('div');
// div1.classList.add('firstDiv');
// div1.style.background = 'grey';
// div1.style.fontSize = '20px';
// div1.style.width = '80%';
// div1.style.margin = 'auto';
// div1.style.textAlign = 'center'
// div1.style.borderRadius = '20px'
// div1.style.marginBottom = '50px'

// header.appendChild(div1);
// const h1F = document.createElement('h1');
// div1.appendChild(h1F);
// h1F.innerText = 'This is first div';
// const div2 = document.createElement('div');
// div2.classList.add('secondDiv');
// div2.classList.add('show-cont');
// div2.style.background = 'grey';
// div2.style.fontSize = '20px';
// div2.style.width = '80%';
// div2.style.margin = 'auto';
// div2.style.textAlign = 'center';
// div2.style.visibility = 'hidden';

// header.appendChild(div2);
// const h2F = document.createElement('h2');
// h2F.textContent = 'This is Second div';
// const hr = document.createElement('hr');

// div2.appendChild(h2F);

// const divFirst = document.querySelector('.firstDiv');
// const divSecond = document.querySelector('.secondDiv');

// const show = document.querySelector('.show-cont');
// console.log(show)


// divFirst.innerHTML = `
// <h1 style = "background: white; margin: 0;borderRadius:20px; padding:10px"> Hello Javascript!!</h1>

// <p style = "padding: 10px; margin:0; color:white">I am adding these text to the div first lets see what happens. Seems like my innerHtml will override my h1F and only this paragraph will be shown in this div </p>

// <div style ="padding:0 0 20px 0">
//     <button type = 'button' style="width:50%; height: 35px" class = "btn">Click Me!!</button>
// </div>

// `

// ;
// console.log(divFirst);
// console.log(divSecond);

// divSecond.innerHTML =`
// <p style="padding: 10px; color:white;">Wow Amazinggg You clicked the button and now this div is shownn. You know some thing about HTML,CSS and JS</p>
// `

// const button = document.querySelector('.btn');
// console.log(button);

// button.addEventListener('click',() => {
//     div2.style.visibility = 'visible';
// })


// const people = [

// {
//     name: 'ronaj',
//     age:24,
//     sex:'Male',
// },
// {
//     name: 'Divya',
//     age:22,
//     sex:'Female'
// },

// {
//     name: 'Diya',
//     age:18,
//     sex:'Female'
// }



// ]


// const ages = people.reduce((value,items) => {
//     if(!items.sex.includes('Female')){
//         value.push(items.sex)
//     }
//     return value;
// },[])

// console.log(ages)