//===============================================//
// AP CALCULUS BC PROJECT -- VISUALIZE CALCULUS  //
//     BY: MATTHEW SETO  |  MR. NHO, PERIOD 4	 //
//===============================================//
// Javascript for Graphing Calculator			 //
// MADE IN NOTEPAD++							 //
// No Math Libraries Like Math.js Used. 		 //
// 100% GMO FREE 								 //
// Code Reference from www.w3schools.com		 //
//===============================================//
F.checked=true; // Show main function f(x).

/////////////////////
// BOOTSTRAP STUFF //
/////////////////////
if("thisisBS"=="thisisBS"){
var jq=0; // Using jQuery?
var bs=0; // Using Bootstrap?

function bsSetup(){ // Setup function called when pretty page loads.
	// Setup canvas properties for BS use.
	bs=1; // Using BS.
	jq=1; // Using jQuery.
	gScale=25; // Larger Scale.
	ftcDisplay.style.visibility="hidden"; // Hide ftc area display, since ftc doesn't start checked.
	reset();
	bsResize(); // Resize canvas based on window size.
	bsCanvas(); // Canvas properties for BS.
	DrawGrid();  // Graph Paper.
	if(MathInput!="") // Graph if user entered some input.
		GraphButton();
}

function bsResize(){ // Resize canvas based on window size.
	canvas.width=window.innerWidth*.8;
	canvas.height=window.innerWidth*.8/2;
}

function bsFTC(){ // User input for FTC range in BS page.
	if(bs==1){
		if(ftc.checked==true){ // Displaying FTC?
			if(MathInput.value==""){ // No input?
				alert("Please enter a function.");
				ftc.checked=false;
			}
			else {
				F.checked=true;
				ftcDisplay.style.display="visible"; // Show ftc display if showing ftc area.
				range=prompt("Enter First x Value."); // Get User Input.
				if(range.includes("pi")||range.includes("e"))
					range=Reformat(range);
				if(range!="") { // End if user cancels from the prompt / invalid input.
					range2=prompt("Enter Second x Value.");
					if(range2.includes("pi")||range2.includes("e"))
						range2=Reformat(range2);
					if(range2!=""){
						firstDer.checked=false; // Uncheck/hide 1st & 2nd Derivatives to keep things clean.
						secondDer.checked=false;
					} else
						ftc.checked=false;
				}
				else 
					ftc.checked=false;
			}
		}
		else{
			//alert();
			ftcDisplay.style.visibility="hidden"; // Hide Area Display if not showing FTC area.
		}
		GraphButton(); // Graph!
	if(isNaN(range)||isNaN(range2))
		ftc.checked=false; // If user cancels from prompt, uncheck FTC.	
	} 
}

function bsCanvas(){ // BS Canvas properties.
	c.restore(); // Restore blank canvas.
	
	// Reformat Canvas properties.
	cWidth = canvas.width;
	cHeight = canvas.height;
	c.translate(cWidth/2+0.5,cHeight/2+0.5); // Center canvas.
	c.scale(1,-1);
	vLines=Math.floor(canvas.width/gScale);
	hLines=Math.floor(canvas.height/gScale);
}
}

////////////////////////////////////////////
// Checkboxes, Canvas, & Variables Setup  //
////////////////////////////////////////////
if("collapse"=="collapse") { // Collapse Stuff Because I'm Using Notepad++.

var inputBlock = document.getElementById("Input");
var points = document.getElementById("Points");

// Check Boxes
var firstDer = document.getElementById("d1");
var secondDer = document.getElementById("d2");
var ftc = document.getElementById("ftc");

///////////////
// FTC SETUP //
///////////////
var range=0, range2=0;


// Range for FTC in ugly page, no BS.
function changeRange(){ // 
	if(bs!=1){
		range=parseFloat(ran.value); // Read input from page input numbers
		range2=parseFloat(ran2.value);
	}
}

// Extrema, PoI, and Discontinuity Points Display
var maximaDisplay=document.getElementById("Maxima");
var minimaDisplay=document.getElementById("Minima");
var PoIDisplay=document.getElementById("PoI");
var discontDisplay=document.getElementById("Discontinuities");

// FTC Value Display 
ftcDisplay=document.getElementById("ftcDisplay");

//DEBUG HTML ELEMENT
var debug = document.getElementById("feedback");

// Canvas Variables & Properties
if("collapse"=="collapse"){
// Canvas
var canvas = document.getElementById("Graph");
var c = canvas.getContext("2d");
c.save(); // Save empty canvas for use in restore()--restores empty so BS may reformat canvas properties.
var cWidth = canvas.width, cHeight = canvas.height; // Canvas width & height.
c.translate(cWidth/2+0.5,cHeight/2+0.5); // Center the Origin (0,0) on Canvas (Canvas Default Origin at Top Left Corner, With a Flipped Y-Axis).
 // Coordinates (+0.5 = "Crisp" Canvas Lines according to http://usefulangle.com/post/17/html5-canvas-drawing-1px-crisp-straight-lines).
c.scale(1,-1); // Flip Canvas so Y-Axis increases.
var gScale=15.5; //Space between "Graph Paper" lines 
var vLines=Math.floor(canvas.width/gScale), hLines=Math.floor(canvas.height/gScale);// Number of Horizontal and Vertical lines drawn on the canvas.

c.fillStyle="blue"; // f(x) Line Color
c.lineWidth=1; // Line Width.
}

//////////////////////
// USER INPUT STUFF //
//////////////////////
function zoomIn(){
	ftc.checked=false;
	gScale+=1.0;
	if(gScale>50)
		gScale=50.0; 
	if(MathInput.value!="")
		GraphButton();
	else
		wipe(0);
}
function zoomOut(){
	ftc.checked=false;
	gScale-=1.0;
	if(gScale<2)
		gScale=2.0;
	if(MathInput.value!="")
		GraphButton();
	else
		wipe(0);
}
function reset(){ // Re-center... Poor naming choice. X_X
	gScale=15.5;
	if(MathInput.value!="")
		GraphButton();
	else
		wipe(0);
}

// User presses 'ENTER' to graph
function entered(event) {
	var key=event.key;
	if(key=="Enter"){
		GraphButton();
		if(marks.checked==true)
		GraphButton();
	}
}

// More checkbox stuff.
// Show Main Function f(x).
function showF(){
	if(F.checked==false){
		ftc.checked=false; // Hide FTC when f(x) is not visible.
		marks.checked=false;	
	}
	GraphButton();
}

function showMarks(){
	if(marks.checked==true)
		F.checked=true;
	GraphButton();
}

function checkClear(){
	if(MathInput.value=="") // Clear when no function input.
		wipe(1);
}

// Not very Responsive-ish Design Function to Base Size Off of Window Size.
// For very ugly page. BS is much better.
function Window() {
	if(bs==0){
	if(window.innerWidth > 700) {
		canvas.style.height="80vh";
		points.style.height="81.5vh";
		points.style.marginLeft="82vw";
	} else {
		canvas.style.height="40vh";
		points.style.height="41.5vh";
		points.style.marginLeft="83vw";
	}
	}	
} 
}



//========================//
//   GRAPHING FUCTIONS 	  //
//========================//

//====================//
//  "GRAPH PAPER"     //
//====================//

function DrawGrid() {
	// Variables
	var x=0,y=0;
	vLines=Math.floor(canvas.width/gScale);
	hLines=Math.floor(canvas.height/gScale); 
	
	feedback.innerHTML = " gScale: "+ gScale + "<p>vLines: " + vLines + "<p>hLines: " + hLines + "<p>x: " + x + "<p>y: " + y;
		// \/ Debug Stuff \/
	//feedback.style.display="block";

	// Graph Paper Lines
	
	//------------------//
	// HORIZONTAL LINES //
	//------------------//
	for(i = 0; i < hLines/2; i++) {
		if(i==0) 
			c.strokeStyle="black"; // Makes X-Axis Darker
		else
			c.strokeStyle="rgba(1,1,1,.1)"; // Lighter Horizontal Lines
		
		// Draw Lines
		c.beginPath();
		c.moveTo(-cWidth/2,y);
		c.lineTo(cWidth/2,y);
		c.stroke();
		y+=gScale; // Spacing Between Lines
	}
	
	for(i = 0; i < hLines/2; i++) { 
		// Draw Lines
		c.beginPath();
		c.moveTo(-cWidth/2,-y);
		c.lineTo(cWidth/2,-y);
		c.stroke();
		y-=gScale; // Spacing Between Lines
	}
	///////////////////////////////////////////////////////
	
	//------------------//
	//  VERTICAL LINES  //
	//------------------//
	for(i = 0; i < vLines; i++) {
		if(i==0)
			c.strokeStyle="black"; // Makes Y-Axis Darker
		else
			c.strokeStyle="rgba(1,1,1,.1)";	 // Lighter Vertical Lines
		// Draw Lines
		c.beginPath();
		c.moveTo(x,-cHeight/2);
		c.lineTo(x,cHeight/2);
		c.stroke();
		x+=gScale; // Spacing
	}
	for(i = 0; i < vLines; i++) { // VERTICAL LINES
		// Draw Lines
		c.beginPath();
		c.moveTo(-x,-cHeight/2);
		c.lineTo(-x,cHeight/2);
		c.stroke();
		x-=gScale; // Spacing
	}
	///////////////////////////////////////////////////////
} // END OF GRAPH PAPER FUNCTION



var functionInput = document.getElementById("MathInput");
var xPoints = [], yPoints = [];
var reformatted="";
//========================//
//   GRAPH [BUTTON]	      //
//========================//
function GraphButton() {
		if(functionInput.value!=""){
		// Clean the Console. For Debug Purposes
		console.clear(); 
		
		// Clear Canvas
		wipe(0);
		
		// Variables
		var x = -1*Math.floor((vLines/2)+1); // Start From Very Left of Canvas
		var y; // Declare Y Value variable
		
		// Make a "Re-Formatter" Function to Make the Function Input Evaluable by eval().
		reformatted = Reformat(functionInput.value); // Reformatted Function Argument
		//alert(reformatted);
		
		// Print function input that the page actually evaluates.
		console.log("Graphing: " + reformatted + ".");
		
		// Locate Extrema
		findExtrema();
		Graph(x,y,reformatted,"blue");
		
		
		// If Derivative Boxes Are Checked?	
		if(firstDer.checked==true)
			firstDerivative();
		if(secondDer.checked==true)
			secondDerivative();
		}
}

//========================//
//   "WIPE" FUNCTION	  //
//========================//
function wipe(a){
		// wipe(0) => For Graphing New Graph
		// wipe(1) => Clear Everything
			c.clearRect(-cWidth,-cHeight,2*cWidth,2*cHeight);
		if(a==1){ // Erase Everything (For Reset Button)
			// Reset Displays for Extrema, PoIs and Discontinuities
			maximaDisplay.innerHTML="--";
			minimaDisplay.innerHTML="--";
			PoIDisplay.innerHTML="--";
			discontDisplay.innerHTML="--";
			range=0;
			range2=0;
			// Reset 'Marker' Arrays
			xPoints=[];
			yPoints=[];
			disX = [];
			disY = [];
			derX=[];
			derY=[];
			der2X=[];
			der2Y=[];
			minX = [];
			minY = [];
			maxX = [];
			maxY=[];
			PoIX=[];
			PoIY=[];
			disX=[];
			disY=[];
			MathInput.value="";		
			reformatted="";
			firstDer.checked=false;
			secondDer.checked=false;
			ftc.checked=false;
			marks.checked=false;
		}
			
		DrawGrid(); // Redraw Graph Paper
}

//========================//
//   GRAPH FUNCTION A     //
//========================//
var step=0.01; // x Increment. Smaller steps should = more detail.

function Graph(x, y, func, color){ // Graphs f(x).
		// Clear Arrays.
		xPoints = []; 
		yPoints = [];
		disX = [];
		disY = [];

		// Add Points to Arrays.
		xPoints.push(x);
		yPoints.push(-y); // Negative y b/c Canvas is Flipped.
		
		// Draw Lines.
		step=0.01;
		c.lineWidth=1;
		c.strokeStyle=color;
		c.beginPath();
		c.moveTo(x*gScale,y*gScale); // First Point of Graph.
		c.stroke();
		
		while(x<vLines) {
			c.beginPath();
			c.moveTo(x*gScale,y*gScale); // Next point.
			
			// New x & y Values.
			x+=step; // STEP!
			//alert(func);
			y=eval(func); // Evaluates Reformatted Input.
			
			
			// Points to Array.
			xPoints.push(parseFloat(x));
			yPoints.push(parseFloat(y.toFixed(4)));

			// Draw (Only when f(x) checkbox is checked / when points exist).
			if(F.checked && findPoint(x)<hLines/2*gScale &&findPoint(x+0.00005).toFixed(0)==findPoint(x-0.00005).toFixed(0)){ // Ensure continuity before moving.
				c.lineTo(x*gScale,y*gScale);
				c.stroke();
			}
			
			// Visual Bug: Some polynomial functions have gaps.
	}
	
	if(ftc.checked==true && !isNaN(range)&&!isNaN(range2)){
		ftcDisplay.style.visibility="visible";
		FUNDTHER();
	} else {
		ftcDisplay.innerHTML="Area: NaN";
		ftcDisplay.style.visibility="hidden";
	}
	
	// Print Array in Console
	//for(i=0;i<xPoints.length;i++)
		//console.log("("+xPoints[i] + ", "+yPoints[i]+")"); 
	
	// Find Holes
	findHoles(vLines); // Check for and Mark Discontinuities
	
	// Mark Extrema, PoIs, and Discontinuities 
	// (Only when f(x) checkbox is checked).
	if(marks.checked==true && functionInput.value!="")
		mark();
	
	
}
// ARRAYS OF USEFUL STUFF.
// .Math Functions.
var dMathFunctions = ["asin","acos","atan","sin","cos","tan","abs", "log","sqrt"];
// NOTE: Math.log = ln in JavaScript
// Array of Operators to Check for When Cutting Up the String
var operators = ["+","-","*","/","^"]; 

//========================//
//   THE REFORMATTER   	  //
//========================//
function Reformat(funcput) { 
		funcput=funcput.replace(/ /gi, ""); // Remove spaces from input.
		// Reformat functionInput.value to a Form Readable by eval().
		// (So users don't have to type Math. all the time / format functions themselves)
		var rV="", sub="", leftover=funcput;
		// sub: Substring before an operator
		// leftover: Substring after an operator
		var numOperators =0; // #Operators
		var foundOperators = []; // Operators Found
		
		// Fixes Coefficients & Multiplication (Ex: 2x & PI)
		// Finds All Coefficients in the Function and adds a * (multiplication) after them.
		// Also Accounts for Large Coefficients(10+)

		//----------------------------------------------------//
		// REFORMATTING PART 1: ADDING OPERATORS/ OTHER STUFF //
		//----------------------------------------------------//
		var newString =""; // New String With * after a coefficient.
		var leftPar=0, rightPar=0; // # in Argument Used for ACTUAL log() (Not Math.log, Which is Actually ln)
		var parenthArgs=""; // Argument in Parentheses
		
		// Constants (e, pi)
		for(i=0;i<leftover.length;i++){
			if(leftover.substring(i,i+1)=="e"){ // Also, when  "e" is used? (2.71828)
				newString+="2.7182818284590452353602874713527"; // e
				if(isNaN(leftover.substring(i+1,i+2))&& leftover.substring(i+1,i+2) != "e" && leftover.substring(i+1,i+2) != ")"&&leftover.substring(i+1,i+2) != "^"&&leftover.substring(i+1,i+2) != "*"&&leftover.substring(i+1,i+2) != "/"&&leftover.substring(i+1,i+2) != "+"&&leftover.substring(i+1,i+2) != "-")
					newString+="*";
			}
			else if(leftover.substring(i,i+2)=="pi"){
				newString+="3.14159265359";
				i++;
				if(isNaN(leftover.substring(i+1,i+2))&& leftover.substring(i+1,i+2) != "e" && leftover.substring(i+1,i+2) != ")"&&leftover.substring(i+1,i+2) != "^"&&leftover.substring(i+1,i+2) != "*"&&leftover.substring(i+1,i+2) != "/"&&leftover.substring(i+1,i+2) != "+"&&leftover.substring(i+1,i+2) != "-")
					newString+="*";
			}
			else if(leftover.substring(i,i+2)=="ln"){
				newString+="log"; // Math.log = Base e. To Find Base 10 logs, May Need to Use Change of Base Identity.
				i++;
			}
 			else if(leftover.substring(i,i+3)=="log"){
				newString+="log10"; // Math.log10 For Base 10 Logarithms
				i+=2;
			}
			else {
				newString+=leftover.substring(i,i+1);
			
				// Operators
				// sin(sin(x)) => +sin(+sin(x))
				// Fix for Unusual Arguments (Ex: sin(cos(x)))
				// ONLY FOR MATH. FUNCTIONS. ALL OTHER OPERATIONS ALREADY WORK!!
				// NOTE!!!! FOUND THAT PUTTING + BEFORE THE MATH. THING MAKES IT  WORK		
				// WILL BE FIXED WHEN THE CONSTANT THING IS FIXED
				// + Thing Doesn't Work For pi and e.
				if(isNaN(leftover.substring(i+1,i+2))&&leftover.substring(i,i+1)=="("&&leftover.substring(i+1,i+2)!="("&&leftover.substring(i+1,i+2)!="x"&&leftover.substring(i+1,i+3)!="pi"&&leftover.substring(i+1,i+2)!="e")
					newString+="+"; 
				// Parentheses
				// Ex: (x)(x+1) => (x)*(x+1)
				if(leftover.substring(i,i+1)==")"&&leftover.substring(i+1,i+2)=="(") 
					newString+="*";
				// x 
				// Ex: 2x => 2*x
				// ex: 2sin(x);
				// Checks if There is a Transition From a Number to a Non-Number
				// New String = > 2*sin(x)
				if(leftover.substring(i,i+1)=="x"&&isNaN(leftover.substring(i+1,i+2))&&leftover.substring(i+1,i+2)!="^"&&leftover.substring(i+1,i+2)!="+"&&leftover.substring(i+1,i+2)!="-"&&leftover.substring(i+1,i+2)!="/"&&leftover.substring(i+1,i+2)!="%"&&leftover.substring(i+1,i+2)!="*"&&leftover.substring(i+1,i+2) != ")" ||!isNaN(leftover.substring(i,i+1))&&isNaN(leftover.substring(i+1,i+2))&&leftover.substring(i+1,i+2)!="."&&leftover.substring(i+1,i+2)!="^"&&leftover.substring(i+1,i+2)!="+"&&leftover.substring(i+1,i+2)!="-"&&leftover.substring(i+1,i+2)!="/"&&leftover.substring(i+1,i+2)!="%"&&leftover.substring(i+1,i+2)!="*"&&leftover.substring(i+1,i+2) != ")")
					newString+=("*");
				// x After Parentheses
				// Ex: (x+2)x => (x+2)*x
				if(leftover.substring(i,i+1)==")"&&leftover.substring(i+1,i+2)=="x")	
					newString+="*";
				if(leftover.substring(i,i+1)==")"&&(leftover.substring(i+1,i+4)=="cos"||leftover.substring(i+1,i+4)=="sin"||leftover.substring(i+1,i+4)=="tan"||leftover.substring(i+1,i+4)=="abs"||leftover.substring(i+1,i+4)=="log"||leftover.substring(i+1,i+5)=="sqrt"))
					newString+="*";
						
			}
		}
		if(newString!=leftover)
			leftover=newString;
		//alert(newString);
		
		//---------------------------------------//
		// REFORMATTING PART 2: FINDING OPERATORS//
		//---------------------------------------//
	
		// Traverse String and Count the #of Operators
		for(i=0;i<leftover.length;i++){
			for(j=0;j<operators.length;j++){
				if(leftover.charAt(i)==operators[j]){
					numOperators++;
					foundOperators.push(operators[j]); // Add Discovered Operator
				}
			}
		}
		// alert("#Operators: "+numOperators);
		// alert("Found: " +foundOperators);
		
		//---------------------------------------//
		// REFORMATTING PART 3: Math. FUNCTIONS  //
		//---------------------------------------//
		//Ex: x+1 (numOperators: 1) => sub = x, leftover=1
		for(i=0;i<numOperators;i++) {// Search leftover for an Operator
			// Use indexOf() to Find First Occurence of Operator
			sub=leftover.substring(0,leftover.indexOf(foundOperators[i]));
			leftover=leftover.substring(leftover.indexOf(foundOperators[i])+1,leftover.length);
			// alert("sub: "+sub);
			// Check for Math. Functions (Excludes Math.pow)
			for(j=0;j<dMathFunctions.length;j++){
				if(sub.includes(dMathFunctions[j])){
						sub="Math."+sub;
				}
			}
		//---------------------------------------//
		// REFORMATTING PART 4: FINAL TOUCHES    //
		//---------------------------------------//
			// Fix Math.pow (Ex: Convert an Input of x^2 to a eval() Readable Version
			// '**' Works instead of Math.pow()!!!!!
			if(foundOperators[i]=="^")
				rV+=sub+"**";
			else // rV for Any Other Operator
				rV+=sub+foundOperators[i];
			//alert("leftover: "+leftover);
		}

		
		// Check for Math. Function in Leftover
		for(j=0;j<dMathFunctions.length;j++){
			if((leftover+"").includes(dMathFunctions[j])&&!(leftover+"").includes("Math.")) // Prevent addition of Math. twice (b/c functions like atan include tan).
				leftover="Math."+leftover;
		}
		//----------------------------------------//
		// REFORMATTING PART 5: RETURN & THE END! //
		//----------------------------------------//
		
		rV+=leftover; // No More Operators, Add Leftovers.
		
		var finalCheck="";
		// Check if there is a Math.Math. issue.
		for(k=0;k<rV.length;k++){
			if(rV.substring(k-5,k)=="Math."&&rV.substring(k,k+5)=="Math.")
				k+=5;
			finalCheck+=rV.substring(k,k+1);
		}
		
		// Remove a toFixed somewhere? Asking doesn't return Infinity or NaN anymore...
		//alert("rV: "+ rV); // See Final Reformatted Function
		return finalCheck;
}

//=============================//
//   DISCONTINUITY POLICE      //
//=============================//
var disX = [], disY = [];
function findHoles(vLines) {
	if(!MathInput.value.includes("asin")&&!MathInput.value.includes("acos")&&!MathInput.value.includes("atan")){
		disX=[];
		disY=[];
		
		for(i=0;i<xPoints.length;i++){
			if(isNaN(findPoint(parseFloat(xPoints[i].toFixed(2))))){
				disX.push(xPoints[i].toFixed(2));
				disY.push(yPoints[i]).toFixed(2);
			}
		}
		
		//alert(disX);
		//alert(disY);
	}
}


//=============================//
//   POINT FINDER		  	   //
//=============================//

function findPoint(input){
	var val=0;
	x=input;
	val=parseFloat(eval(reformatted));
	return val;
}

// Find Specific Point Via User Input 
function ask(){
	if(functionInput.value!=""){
		var input = prompt("X Value?");
		x=eval(Reformat(input));
		
		// 1st Derivative
		var m1 = 2*(findPoint(x+0.00001)-findPoint(x-0.00001))/((x+0.00001)-(x-0.00001));
		//var m2= 2*(findPoint(x+0.00002)-findPoint(x-0.00002))/((x+0.00002)-(x-0.00002));
		//var m3= 2*(findPoint(x-0.00001)-findPoint(x-0.00002))/((x+0.00001)-(x-0.00002));
		// 2nd Derivative
		//var der2M= (m3-m1)/((x+0.00002)-(x-0.00002))/-1233.34555268;
		
		
		alert("f(x): "+eval(reformatted).toFixed(4)); // Round to 3 Decimal Places
		alert("f'(x): "+m1.toFixed(4));
		//console.log("f''(x):"+der2M.toFixed(4));
	
	} else
		alert("Please enter a function.");
}

//=================================//
//   FIRST DERIVATIVE GRAPHER      //
//=================================//
// Graph f'(x)
function firstDerivative(){ // Derivative Algorithm Pt. 2
	if(ftc.checked==true) 
		GraphButton();
	ftc.checked=false;
	if(firstDer.checked) {
		// Reset Derivative Points
		derX = [];
		derY = [];
		
		// Derive & Graph
		derive();
		PointGraph(derX, derY, "red");
	}
	else
		GraphButton();
	

}

//=================================//
//   SECOND DERIVATIVE GRAPHER     //
//=================================//
// Graph f''(x)
function secondDerivative(){
	if(ftc.checked==true) {
		secondDer.checked=true;
		GraphButton();
	}
	ftc.checked=false;
	if(secondDer.checked) {
		// Reset Derivative Points
		derX = [];
		derY = [];
		der2X = [];
		der2Y = [];
		
		// Derive & Graph
		derive2();
		PointGraph(der2X, der2Y, "green");
	}
	else
		GraphButton();
	

	
}

//=================================================//
//   FUNDAMENTAL THEOREM OF CALCULUS [W/GRAPHER]   //
//=================================================//
// Graph FTC.
var ftcArea=0; // Measures Area Under Curve.
function FUNDTHER(){
	// Show FTC Display.
	// if(ftc.checked==true)
		// ftcDisplay.style.display="block";
	// else
		// ftcDisplay.style.display="invisible";
	
	// Uncheck Derivatives.
	if(firstDer.checked==true||secondDer.checked==true){
		firstDer.checked=false;
		secondDer.checked=false;
	}
		
	if(ftc.checked && !isNaN(range)&& !isNaN(range2)&&findPoint(range)!=Infinity&&findPoint(range2)!=Infinity){
		firstDer.checked=false;
		secondDer.checked=false;
		ftcArea=0;
		var r1=parseFloat(Reformat(range));
		var r2=parseFloat(Reformat(range2));

		
		
		var temp=0;
		var negArea=false;
		var rangeArrayX=[], rangeArrayY=[];
		var bad = false; // If there is a discontinuity in range.
		// EASY EVAL: IF EVEN OR ODD, DON'T GO THROUGH EVERYTHING!!!

		if(r2<r1){ // If b<a.
			// FTC Area is to be Negative.
			negArea=true;
			
			// Swap a & b
			temp=r2;
			r2=r1;
			r1=temp;
		} else
			newArea=false;
		
 		// Points not in Array & View Window?
		// Restructure xPoints and yPoints Array Within Domain of Given Points
		var newX=0;
		if(r2>xPoints[xPoints.length-1]||r1>xPoints[xPoints.length-1]||r1<xPoints[0]||r2<xPoints[0]) { 
			newX=parseFloat(r1); // Start From Smaller x Value
			// Reset Original Coordinate Arrays
			xPoints=[];
			yPoints=[];
			
			// Fill Arrays
			while(newX<r2){ // Fill Coordinates Within Domain.
				//console.log(newX+","+findPoint(newX));
				xPoints.push(parseFloat(newX.toFixed(6)));
				yPoints.push(parseFloat(findPoint(newX).toFixed(6)));

				
				newX+=0.01; 
			}
	 		// for(i=0;i<xPoints.length;i++){
				// console.log(xPoints[i]+", "+yPoints[i]);
			// }
		} 
		// Take Points Within the Selected Domain (Domain Outide of Current Window).
		var bigCheck=0; // Used to check for discontinuities in functions like tan(x).
		for(i=0;i<xPoints.length;i++){
			if(xPoints[i]>=r1&&xPoints[i]<=r2) {
				rangeArrayX.push(xPoints[i]);
				rangeArrayY.push(yPoints[i]);
			}
		}

		for(i=0;i<rangeArrayX.length;i++){
			if(i<rangeArrayX.length-1) {
				// Trapezoidal Approximation
				// Area = 0.5h(b1+b2)
				// h = step
				//console.log(ftcArea);
				var m1 = 2*(findPoint(rangeArrayX[i]+0.00001)-findPoint(rangeArrayX[i]-0.00001))/((rangeArrayX[i]+0.00001)-(rangeArrayX[i]-0.00001));
				var m2 = 2*(findPoint(rangeArrayX[i+1]+0.00001)-findPoint(rangeArrayX[i+1]-0.00001))/((rangeArrayX[i+1]+0.00001)-(rangeArrayX[i+1]-0.00001));
		
				
				
				ftcArea+=parseFloat((step*0.5*(m1+m2)).toFixed(6))/2;
			}
			
			// Reduce Lag By Drawing less Lines (Area Accuracy Is Kept)
			if(i%25==0 || i==rangeArrayX.length-1 || i==0){ // 25 Step Increment
				if(i==rangeArrayX.length-1||i==0) // Make Start and End of Area Sharper
					c.strokeStyle="rgba(255,0,0,1)";
				 else 
					c.strokeStyle="rgba(255,162,40,0.8)";
				
				// Draw Lines
				c.beginPath();
				c.moveTo(rangeArrayX[i]*gScale+0.5,rangeArrayY[i]*gScale);
				c.lineTo(rangeArrayX[i]*gScale+0.5,0); // +0.5 For Crisp Lines
				c.stroke();
			}
		}
		
		ftcArea=ftcArea.toFixed(2);
		
		
		// if(Math.abs(ftcArea)>1e7)
			// ftcArea=NaN;

			//alert("Area: "+ parseFloat(ftcArea.toFixed(4)));
			// Update FTC Area Display
			ftcDisplay.innerHTML="Area ";
				if(negArea) // Negative? (Inputted b is less than inputted a)
					ftcDisplay.innerHTML+="("+r2+" to "+r1+"): "+-ftcArea;
				else
					ftcDisplay.innerHTML+="("+r1+" to "+r2+"): "+ftcArea;
	}
		c.strokeStyle="blue";
}

//==================================//
//   1ST DERIVATVE POINT FINDER     //
//==================================//
var derX = [], derY = []; 
// Derivative Function/Algorithm Pt. 1

function derive(){ // Fills Arrays of 1sd Derivative Coordinates
	var m = 0; // Slope!
	
	//console.clear(); // For Debug.
	//console.log("Derivative Points:"); // For Debug.
	// Find the Slope at Every Point of the Function
	for(i=0;i<xPoints.length;i++) {
		m =(yPoints[i+1]-yPoints[i])/(xPoints[i+1]-xPoints[i]); // Calculate Slope
		//console.log("M: "+m); // Debug
		/* if(xPoints[i]>0.5&&xPoints[i]<1)
			console.log(xPoints[i]+", "+m.toFixed(4)); */

		if(!isNaN(m)&&m!=Infinity&&!(Math.abs(m)>hLines/2*gScale)&&i>0){
				
			
			derX[i]=xPoints[i].toFixed(4);
			derY[i]=m.toFixed(4);
			if(functionInput.value.includes("abs")&&derY[i]>0&&derY[i-1]<0||derY[i]<0&&derY[i-1]>0||derY[i]>0&&derY[i-1]==0||derY[i]<0&&derY[i-1]==0){
				derY[i]=NaN;
			}
			//if(derX[i]>-0.5&&derX[i]<0.5)
				//console.log(derX[i],derY[i]); // Debug
		}
	}
}

//==================================//
//   2ND DERIVATVE POINT FINDER     //
//==================================//
// BUG: 1/abs(x) is all jittery!
var cut = 80;
var der2X=[], der2Y=[];
function derive2() {// Fills Arrays of 2nd Derivative Coordinates
	derive();
	var m = 0; // Slope!
	//console.log("2nd Derivative Points:");
	// Find the Slope at Every Point of the Function
	for(i=0;i<derX.length;i++) { // Too Many Points = Crazy Graph! Reduce #Points!
		m =((parseFloat(derY[i+cut]).toFixed(2)-parseFloat(derY[i]).toFixed(2))/(parseFloat(derX[i+cut]).toFixed(2)-parseFloat(derX[i]).toFixed(2))); // Calculate Slope
		// For finding PoIs. Not for graphing 2nd Derivative.
		full2X.push(derX[i]);
		full2Y.push(m.toFixed(4));
		
		
		// EXPERIMENTING WITH ABS BOXY LOOKING LINE 2nd DER ISSUE!!
		/*if(derX[i]>-0.1 && derX[i]<0.1 )
		console.log('x:'+derX[i]+', y: '+m); */
		
		if(!isNaN(derY[i+cut])&&!(Math.abs(derY[i+cut])>hLines/2*gScale)&&!isNaN(m)&&m!=Infinity&&!(Math.abs(m)>hLines/2*gScale)&&i>0){
			der2X[i]=(parseFloat(derX[i])+cut/200.0).toFixed(4);
			der2Y[i]= m.toFixed(4);
			
			// Fix Abs Boxy Thingamabob?
			if(functionInput.value.includes("abs")&&der2Y[i]>0&&der2Y[i-1]<0||der2Y[i]<0&&der2Y[i-1]>0||der2Y[i]>0&&der2Y[i-1]==0||der2Y[i]<0&&der2Y[i-1]==0||der2Y[i]!=((derY[i]-derY[i-1])/(derX[i]-derX[i-1]))){
				if(functionInput.value.includes("abs")) {
					//alert(der2Y[i]);
					der2Y[i]=((derY[i]-derY[i-1])/(derX[i]-derX[i-1]));
					if(der2Y[i]>0&&der2Y[i-1]<0||der2Y[i]<0&&der2Y[i-1]>0||der2Y[i]>0&&der2Y[i-1]==0||der2Y[i]<0&&der2Y[i-1]==0||der2Y[i]!=((derY[i]-derY[i-1])/(derX[i]-derX[i-1])))
						der2Y[i]=der2Y[0];
				}
			}
			//if(der2X[i]>-0.5&&der2X[i]<0.5)
			//console.log(der2X[i]+", "+der2Y[i]);
		}
	}
}

//=========================//
//   GRAPH FUNCTION B      //
//=========================//tan(x)
function PointGraph(x, y, color){ 
		// Graph Using Arrays of x and y Coordinates
		// Prepare Lines
		c.lineWidth=1;
		c.strokeStyle=color; // red = 1st Der, green = 2nd Der
		c.beginPath();
		c.moveTo(x[0],y[0]); // First Point of Graph
		
		for(i=0;i<x.length;i++) {
			c.strokeStyle=color;
			
 			// Abs
			if(functionInput.value.includes("abs")&&isNaN(derY[i])||yPoints[i]==0) // WHEN ABS = 0 SHOULD INCREMENT TO PREVENT GRAPHING THE UGLY VERTICAL LINE!!!
				if(color=="red"&&yPoints[i+1]!=0)
					c.strokeStyle="rgba(0,0,0,0)"; 

			// THE 2ND DERIVATIVE FIX!!!! :))))
			// IF 1st der isnt at an x, don't graph 2nd der GOT IT :))))
			if(color=="green"&&!derX.includes(der2X[i+12])||!derX.includes(der2X[i-12])||!derX.includes(der2X[i])){
				if(color!="red")
					c.strokeStyle="rgba(0,0,0,0)"; // == No color
			}
			
			if(!isNaN(y[i])){
				c.beginPath();
				c.moveTo(x[i-1]*gScale,y[i-1]*gScale);
				c.lineTo((x[i])*gScale,y[i]*gScale);
				c.stroke();	
			}
		}
	//for(i=0;i<xPoints.length;i++) // For Debug
		//console.log("("+xPoints[i] + ", "+yPoints[i]+")"); 
	}
	



//============================================//
//   EXTREMA & POINT OF INFLECTION FINDER     //
//============================================//
// Min & Max // BROKEN
var minX = [],minY = [], maxX = [], maxY=[], PoIX=[], PoIY=[];
var full2X=[], full2Y=[]; // Array of ALL 2nd derivative points. For finding PoIs -- not graphing!
function findExtrema() {
	// Clear Arrays
	minX = [];
	minY = [];
	maxX = [];
	maxY=[];
	PoIX=[];
	PoIY=[];
	derX=[];
	derY=[];
	der2X=[];
	der2Y=[];
	full2X=[];
	full2Y=[];	
	
	// Derive Function to Get Points
	derive();
	// Second Derivative to  Get Points
	derive2();
	
	// Search for Change in Sign from Arrays derX and derY
	var current=0, next=0, nextNext=0;
	
	for(j=0;j<2;j++){
		for(i=0;i<derX.length-1;i++){
			// Second Derivative Test to Find Extrema
			if(derY[i]==0){
				//alert();
				if(full2Y[i]>0){
					minX.push(xPoints[i].toFixed(3));
					minY.push(yPoints[i].toFixed(3));
				} else if(full2Y[i]<0){
					maxX.push(xPoints[i].toFixed(3));
					maxY.push(yPoints[i].toFixed(3));				
				} else if(full2Y[i]==0){
					// NOTHING
				}				
			}
		}
	}

	// If first check missed some extrema: check for change in signs.
for(i=0;i<derX.length;i++){
	x=parseFloat(derX[i]);
	//current=derY[i];
	next=derY[i+1];
	prev=derY[i-1];
	if(prev!=0&&next!=0){
		if(!minX.includes(xPoints[i])&&prev<0&&next>0){
			minX.push((xPoints[i]+step).toFixed(3));
			minY.push(yPoints[i].toFixed(3));
		}
		if(!maxX.includes(xPoints[i])&&maxX.length==0&&prev>0&&next<0){	
			maxX.push((xPoints[i]+step).toFixed(3));
			maxY.push(yPoints[i].toFixed(3));
		}	
	}
		
}
	

	// EXTRA EXTREMA & PoIs FROM BOUND LEAPS in Trig Functions
	for(i=0;i<der2X.length-1;i++){
		// if(parseFloat(xPoints[i]).toFixed(2)==parseFloat(full2X[i]).toFixed(2)&&parseFloat(yPoints[i]).toFixed(2)==parseFloat(full2Y[i]).toFixed(2)){
			// PoIX.push(xPoints[i]); // Off by ~.42
			// PoIY.push(yPoints[i]);
		// }
	// }
			current=der2Y[i];
			next=der2Y[i+1];
			nextNext=der2Y[i+5]; // In case next = 0
			
			if(current<0&&next>0||current>0&&next<0||next==0&&current<0&&nextNext>0||next==0&&current>0&&nextNext<0){
				if(Math.abs(parseFloat(yPoints[i+42]))<(hLines/4*gScale)){
					PoIX.push(parseFloat(xPoints[i]+.42).toFixed(2)); // Off by ~.42
					PoIY.push(parseFloat(yPoints[i+42]).toFixed(2));
				}
			}
		}
	}	
	
//============================================//
//     EXTREMA, PoI, DISCONTINUITY MARKER     //
//============================================//
function mark(){
	ftc.checked=false;
	c.fillStyle="rgba(225,245,0)"		
	c.strokeStyle="black";
	c.linewidth=2;
	
	// Minimums
	for(i=0;i<minX.length;i++){
		c.beginPath();
		c.arc(minX[i]*gScale,minY[i]*gScale,3,0,2*Math.PI);
		c.fill();
		c.stroke();
	}
	
	// Maximums
	for(i=0;i<maxX.length;i++){
		c.beginPath();
		c.arc(maxX[i]*gScale,maxY[i]*gScale,3,0,2*Math.PI);
		c.fill();
		c.stroke();
	}
	
	// Points of Inflection
	c.fillStyle="rgba(0,245,245)"	
	for(i=0;i<PoIX.length;i++){
		c.beginPath();
		c.arc(PoIX[i]*gScale,PoIY[i]*gScale,3,0,2*Math.PI);
		c.fill();
		c.stroke();
	}
	
	// Discontinuities
	//console.log("Test: "+disX);
	c.strokeStyle="red";
	c.fillStyle="white";	
	for(i=0;i<disX.length;i++){
		c.beginPath();
		c.arc(disX[i]*gScale,disY[i]*gScale,2,0,2*Math.PI);
		c.fill();
		c.stroke();
	}
	
	// Display Points on User Interface
	// Clear
	maximaDisplay.innerHTML="--";
	minimaDisplay.innerHTML="--";
	PoIDisplay.innerHTML="--";
	discontDisplay.innerHTML="--";
	
	for(i=0;i<maxX.length;i++){
		maximaDisplay.innerHTML+="<p>"+(i+1)+". "+"("+maxX[i]+","+maxY[i]+")</p>";
	}
	for(i=0;i<minX.length;i++){
		minimaDisplay.innerHTML+="<p>"+(i+1)+". "+"("+minX[i]+","+minY[i]+")</p>";
	}
	for(i=0;i<PoIX.length;i++){
		PoIDisplay.innerHTML+="<p>"+(i+1)+". "+"("+PoIX[i]+","+PoIY[i]+")</p>";
	}	
	for(i=0;i<disX.length;i++){
		discontDisplay.innerHTML+="<p>"+(i+1)+". "+"("+disX[i]+","+disY[i]+")</p>";
	}		
}
