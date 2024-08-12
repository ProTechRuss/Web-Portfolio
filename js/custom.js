
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

function YT1() {
    // URL to which you want to redirect
    window.location.href = 'https://www.youtube.com/watch?v=62VnwrU_FrQ&t=157s';
}

function YT2() {
    // URL to which you want to redirect
    window.location.href = 'https://www.facebook.com/share/v/iG14ZD6ocCw88ftX/';
}

function YT3() {
    // URL to which you want to redirect
    window.location.href = 'https://www.youtube.com/watch?v=smJH8Hr3H1U';
}
function openPDF() {
	// URL of the PDF file
	var pdfURL = 'Gonzales_Resume_CV.pdf'; // Replace with your PDF file URL

	// Open the PDF file in a new tab
	window.open(pdfURL, '_blank');
}
function openPDF2() {
	// URL of the PDF file
	var pdfURL = 'Social Media.pdf'; // Replace with your PDF file URL

	// Open the PDF file in a new tab
	window.open(pdfURL, '_blank');
}

