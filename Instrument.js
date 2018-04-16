var osc, osc2, envelope, envelope2, fft, fft2;
var isone,istwo,isthree,isfour,isfive, issix, isseven, iseight;
var mic, voicerecord, soundFile, instrumental, recorder,soundFile2;
var p;

function preload(){
	instrumental = loadSound('Drums_Only_Beat.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	osc= new p5.SinOsc();
	osc2= new p5.SinOsc();
	
	envelope=  new p5.Env();
	envelope2= new p5.Env();
	
	envelope.setADSR(0.003, 0.01, 0.95, 0.03);
	envelope2.setADSR(0.1, 0.3, 0.1, 0.5);
	
	envelope.setRange(1,0);
	envelope2.setRange(1,0);
	
	osc.start();
  osc2.start();
  osc.amp(0)
  osc2.amp(0)

  fft = new p5.FFT();
	
	mic = new p5.AudioIn();
	mic.start();
	voicerecord = new p5.SoundRecorder();
	voicerecord.setInput(mic);
	soundFile = new p5.SoundFile();
	fft2 = new p5.FFT();
	fft2.setInput(soundFile);
	
	recorder= new p5.SoundRecorder();
	recorder.setInput();
	soundFile2 = new p5.SoundFile();
	
	var RecordVoice = createButton("Record Your Voice");
	RecordVoice.position(350,100);
	RecordVoice.mousePressed(record);
	
	var StopRecording = createButton("Stop Recording");
	StopRecording.position(350,130);
	StopRecording.mousePressed(stopRecord);
	
	var PlayRecording = createButton("Play Recording");
	PlayRecording.position(100,50);
	PlayRecording.mousePressed(playRecord);

	var RecordSong = createButton("Record Your Song");
	RecordSong.position(100,450);
	RecordSong.mousePressed(musicRecord);

	var StopSong = createButton("Stop Song Recording");
	StopSong.position(260,450);
	StopSong.mousePressed(RecordStop);

	var PlayRecord = createButton("Play Your Song");
	PlayRecord.position(100,470);
	PlayRecord.mousePressed(RecordPlay);

	var SaveSong = createButton("Save Your Song");
	SaveSong.position(260,470);
	SaveSong.mousePressed(SaveRecord);
}

function draw() {
	push();
	textSize(20);
	text('Use 1,2,3,4,5,6,7,8 to control the Instrument', 20, 350);
	text('Use "p" to play the instrumental and "o" to stop the instrumental', 470, 420);
	text('Use "a" to play your voice recording', 30, 420);
	pop();
	if (isone == true){
		ellipse(56, 46, 55, 55);
	}
	if (istwo == true){
		line(56, 70, 56, 150);
	}
	if (isthree == true){
		line (30, 80, 56, 90);
	}
	if (isfour == true){
		line(56,90,88,80);
	}
	if (issix == true){
		line(56, 150, 85, 180);
	}
	if (isfive == true){
		line(56, 150, 35, 180);
	}
	if (isseven == true){
		push();
		textSize(28);
		text('.  .', 42,42);
		pop();
	}
	if (iseight == true){
		arc(56,48,30,30,0, HALF_PI);
	}
	
}

function keyTyped(){
	if (key == '1'){
		playKeys(72);
		isone = !isone;
	}
	if (key == '2'){
		playKeys(74);
		istwo = !istwo;
	}
	if (key == '3'){
		playKeys(76);
		isthree = !isthree;
	}
	if (key == '4'){
		playKeys(77);
		isfour = !isfour;
	}
	if (key == '5'){
		playKeys(79);
		isfive = !isfive;
	}
	if (key == '6'){
		playKeys(81);
		issix = !issix;
	}
	if (key == '7'){
		playKeys(83);
		isseven = !isseven;
	}
	if (key == '8'){
		playKeys(84);
		iseight = !iseight;
	}
	if (key == 'a'){
		playRecord();
	}
	if(key == 'o'){
			stopInstrumental();
		}
	if(key=='p'){
			playInstrumental();
		}

	}

function playKeys(midiNumba){
	osc.freq(midiToFreq(midiNumba));
	osc2.freq(midiToFreq(midiNumba+6));
	envelope.play(osc);
	envelope2.play(osc);
}

function record(){
	background ("green");
	voicerecord.record(soundFile);
}
function stopRecord(){
	background(100);
	voicerecord.stop();
}
function playRecord(){
	background('red');
	soundFile.stop();
	soundFile.play();
}
function playInstrumental(){
	instrumental.play();
}
function stopInstrumental(){
	instrumental.stop();
}
function musicRecord(){
	background('blue');
	recorder.record(soundFile2);
}
function RecordStop(){
	background('pink');
	recorder.stop();
	voicerecord.stop();
	stopInstrumental();
}
function RecordPlay(){
	background(random(43, 205), random(1, 94),random(7, 150));
	soundFile2.play();
}
function SaveRecord(){
	saveSound(soundFile2, 'Your KickAss Song');
}