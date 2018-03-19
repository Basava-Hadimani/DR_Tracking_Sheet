
var myVar;

$(window).on('load',function(){
     $('#loader').fadeOut();
});


function myFunction() {
  myVar = setTimeout(showPage, 250);
}

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("myDiv").style.display = "block";
}

function hideBlock(){
  switch(event.target.id){
    case 'triggerLink':
                        document.getElementById('editLink').style.display = 'none';
                        document.getElementById('select').style.display = 'none';
                        if(document.getElementById('TrigerForm')){
                        document.getElementById('TrigerForm').style.display = 'block';
                        }
                        document.getElementById('home').style.display = 'none';
                        break;
    case 'editLink':
                        document.getElementById('triggerLink').style.display = 'none';
                        document.getElementById('select').style.display = 'none';
                        if(document.getElementById('TableData')){
                          document.getElementById('TableData').style.display = 'block';
                        }
                        if(document.getElementById('UpdateSummery')){
                        document.getElementById('UpdateSummery').style.display = 'none';
                        }
                        document.getElementById('home').style.display = 'block';
                        break;
    case 'submitTrigger':
                        document.getElementById('editLink').style.display = 'block';
                        document.getElementById('select').style.display = 'block';
                        document.getElementById('TrigerForm').style.display = 'none';
                        break;

    case 'submitSummary':
                        if(document.getElementById('UpdateSummery')){
                        document.getElementById('UpdateSummery').style.display = 'none';
                        }
                        document.getElementById('results').style.display = 'block';
                        document.getElementById('home').style.display = 'block';
                        break;

   case 'submitEE':
                        if(document.getElementById('UpdateEffort')){
                        document.getElementById('UpdateEffort').style.display = 'none';
                        }
                        document.getElementById('results').style.display = 'block';
                        document.getElementById('home').style.display = 'block';
                        break;

   case 'linkToUpdateSummary' :
                            document.getElementById('results').style.display = 'none';
                            if(document.getElementById('UpdateSummery')){
                            document.getElementById('UpdateSummery').style.display = 'block';
                            }
                            document.getElementById('home').style.display = 'none';
                            break;

  case 'linkToUpdateEffort' :
                            document.getElementById('results').style.display = 'none';
                            if(document.getElementById('UpdateEffort')){
                            document.getElementById('UpdateEffort').style.display = 'block';
                            }
                            document.getElementById('home').style.display = 'none';
                            break;
  case 'linkToView'   :
                            debugger
                            document.getElementById('results').style.display = 'none';
                            break;


  }

}

function home(){
    document.getElementById('triggerLink').style.display = 'table';
    document.getElementById('editLink').style.display = 'block';
    document.getElementById('select').style.display = 'block';
    document.getElementById('results').style.display = 'block';

    if(document.getElementById('TrigerForm')){
    document.getElementById('TrigerForm').style.display = 'none';
  }
    if(document.getElementById('TableData')){
    document.getElementById('TableData').style.display = 'none';
  }

  if(document.getElementById('UpdateSummery')){
  document.getElementById('UpdateSummery').style.display = 'none';
  }
  if(document.getElementById('UpdateEffort')){
  document.getElementById('UpdateEffort').style.display = 'none';
  }

}
