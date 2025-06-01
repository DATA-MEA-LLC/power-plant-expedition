$(document).ready(function(){
 let video =  document.getElementById("video");
 
  video.autoplay = true;
  video.load();
  video.muted=false;
  video.volume = 0.5;

});
function changeImg(){
  var turn = Math.floor(Math.random() * 26);//Math.floor(Math.random() * 26) returns a random integer between 0 and 25 (both included)
  
  switch(turn) {
  case 0:
    document.getElementById("image").src = "https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/vintage_light_pack.glb?v=1721063788514";
     document.getElementById("p1").innerHTML = "en: vintage light bulb";
      document.getElementById("p2").innerHTML = "es: bombillas antiguas";
      //basin
    break;
  case 1:
     document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/electricity_generator.glb?v=1721063708632";
       document.getElementById("p1").innerHTML = "en: Generator";
      document.getElementById("p2").innerHTML = "es: Generador";
      //sponge
    break;
     case 2:
    document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/key_electricity_lever.glb?v=1721063710531";
       document.getElementById("p1").innerHTML = "en: lever";
      document.getElementById("p2").innerHTML = "es: palanca";
      //drain
       case 3:
     document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/power_lines_high_voltage_electricity.glb?v=1721063712675";
       document.getElementById("p1").innerHTML = "en: power lines high voltage";
      document.getElementById("p2").innerHTML = "es: líneas eléctricas de alto voltaje";
      //soap
    break;
       case 4:
    document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/electricity_pole.glb?v=1721063714453";
      document.getElementById("p1").innerHTML = "en: electricity pole";
      document.getElementById("p2").innerHTML = "es: poste de electricidad";
    break;
     case 5:
    document.getElementById("image").src = "https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/dc_regulated_power_supply_unit.glb?v=1721063715987";
     document.getElementById("p1").innerHTML = "en: regulated power supply";
      document.getElementById("p2").innerHTML = "es: fuente de alimentación regulada";
      //basin
    break;
  case 6:
     document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/a_simple_lightbulb.glb?v=1721063716611";
       document.getElementById("p1").innerHTML = "en: light bulb";
      document.getElementById("p2").innerHTML = "es: bombilla";
      //sponge
    break;
     case 7:
    document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/reconectador_transformador.glb?v=1721063717497";
       document.getElementById("p1").innerHTML = "en: transformer for reconnecting";
      document.getElementById("p2").innerHTML = "es: transformador para reconexión";
      //drain
       case 8:
     document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/page_induction_coil_from_us_patent_76654.glb?v=1721063721209";
       document.getElementById("p1").innerHTML = "en: Induction coil US Patent";
      document.getElementById("p2").innerHTML = "es: Bobina de inducción Patente de EE. UU.";
      //soap
    break;
       case 9:
    document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/analog_multimeter.glb?v=1721063722666";
      document.getElementById("p1").innerHTML = "en: analog multimeter";
      document.getElementById("p2").innerHTML = "es: multímetro analógico";
    break;
     case 10:
    document.getElementById("image").src = "https://cdn.glitch.me/431933b3-8620-4289-a2a0-ee5ed28d7390/electric_core.glb?v=1721063747186";
     document.getElementById("p1").innerHTML = "en: electric core";
      document.getElementById("p2").innerHTML = "es: núcleo eléctrico";
      //basin
    break;
  case 11:
     document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/switch_electronic_constructor.glb?v=1721063747843";
       document.getElementById("p1").innerHTML = "en: electric switch";
      document.getElementById("p2").innerHTML = "es: interruptor eléctrico";
      //sponge
    break;
     case 12:
    document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/ampermeter.glb?v=1721063750382";
       document.getElementById("p1").innerHTML = "en: amperemeter";
      document.getElementById("p2").innerHTML = "es: amperímetro";
      //drain
       case 13:
     document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/outlet.glb?v=1721063750798";
       document.getElementById("p1").innerHTML = "en: outlet";
      document.getElementById("p2").innerHTML = "es: toma de corriente";
      //soap
    break;
       case 14:
    document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/electric_box.glb?v=1721063751889";
      document.getElementById("p1").innerHTML = "en: electric box";
      document.getElementById("p2").innerHTML = "es: caja electrica";
    break;
        case 15:
    document.getElementById("image").src = "https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/electrical_box.glb?v=1721063756877";
     document.getElementById("p1").innerHTML = "en: electrical box";
      document.getElementById("p2").innerHTML = "es: caja electrica";
      //basin
    break;
  case 16:
     document.getElementById("image").src ="https://cdn.glitch.me/431933b3-8620-4289-a2a0-ee5ed28d7390/generator__old_test_job.glb?v=1721063773058";
       document.getElementById("p1").innerHTML = "en: old generator";
      document.getElementById("p2").innerHTML = "es: viejo generador";
      //sponge
    break;
     case 17:
    document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/automatic_voltage_regulator_avr.glb?v=1721063774874";
       document.getElementById("p1").innerHTML = "en: automatic voltage regulator";
      document.getElementById("p2").innerHTML = "es: regulador de voltaje automático";
      //drain
       case 18:
     document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/capacitors.glb?v=1721063776897";
       document.getElementById("p1").innerHTML = "en: electric capacitors";
      document.getElementById("p2").innerHTML = "es: condensadores electricos";
      //soap
    break;
       case 19:
    document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/energy-meter.glb?v=1721063780375";
      document.getElementById("p1").innerHTML = "en: energy meter";
      document.getElementById("p2").innerHTML = "es: medidor de energía";
    break;
     case 20:
    document.getElementById("image").src = "https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/reconectador.glb?v=1721063783491";
     document.getElementById("p1").innerHTML = "en: connector";
      document.getElementById("p2").innerHTML = "es: reconector";
      //basin
    break;
  case 21:
     document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/thick_cabletube_roll.glb?v=1721063789278";
       document.getElementById("p1").innerHTML = "en: cable roll";
      document.getElementById("p2").innerHTML = "es: rollo de cable";
      //sponge
    break;
     case 22:
    document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/electricity_transmission_conductor_fittings.glb?v=1721063792810";
       document.getElementById("p1").innerHTML = "en: conductor fittings";
      document.getElementById("p2").innerHTML = "es: conductores";
      //drain
       case 23:
     document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/pylon.glb?v=1721063795382";
       document.getElementById("p1").innerHTML = "en: pylon";
      document.getElementById("p2").innerHTML = "es: torre electrica";
      //soap
    break;
       case 24:
    document.getElementById("image").src ="https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/electricity_pole%20(1).glb?v=1721063798351";
      document.getElementById("p1").innerHTML = "en: electric pole";
      document.getElementById("p2").innerHTML = "es: poste electrico";
    break;
     case 25:
    document.getElementById("image").src = "https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/box_electricity_metallic_-_15mb.glb?v=1721063802280";
     document.getElementById("p1").innerHTML = "en: electric box";
      document.getElementById("p2").innerHTML = "es: caja electrica";
      //basin
    break;
 
  }//switch
  
}//function
///show()
function show(){
  const audioEn = document.getElementById("en");
  audioEn.style.display = "block";
   audioEn.autoplay = true;
  audioEn.load();//start the audio w one click in button
  const eraseEs = document.getElementById("es");
  eraseEs.style.display = "none";
   eraseEs.pause();
  eraseEs.currentTime = 0;//set to start again
}
function showEs(){
  const audioEs = document.getElementById("es");
  audioEs.style.display = "block";
    audioEs.autoplay = true;
  audioEs.load();//start the audio w one click in button
  const eraseEn = document.getElementById("en");
  eraseEn.style.display = "none";
  eraseEn.pause();
  eraseEn.currentTime = 0;
}
//enable tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
function numberLoad(){
  var bathColor = Math.floor(Math.random() * 5);//returns a random integer between 0 and 4 (both included):
  switch(bathColor){
    case 0:
       document.getElementById("number").href = "https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/2jEOKEpDhEliMFrTuAbJjV0dtSd-printable.pdf?v=1721147589296";
       document.getElementById("number").innerHTML = "Coloring activity 1!";
        document.getElementById("number").setAttribute("download", "2jEOKEpDhEliMFrTuAbJjV0dtSd-printable.pdf");
      break;
       case 1:
       document.getElementById("number").href = "https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/2jCYTnd40m3RTmvLVZyNJ0d3gOf-printable.pdf?v=1721147590748";
       document.getElementById("number").innerHTML = "Coloring activity 2!";
        document.getElementById("number").setAttribute("download", "2jCYTnd40m3RTmvLVZyNJ0d3gOf-printable.pdf");
      break;
         case 2:
       document.getElementById("number").href = "https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/29.pdf?v=1721147872772";
       document.getElementById("number").innerHTML = "Coloring activity 3!";
        document.getElementById("number").setAttribute("download", "29.pdf");
      break;
         case 3:
       document.getElementById("number").href = "https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/45.pdf?v=1721147874118";
       document.getElementById("number").innerHTML = "Coloring activity 4!";
        document.getElementById("number").setAttribute("download", "45.pdf");
      break;
           case 4:
       document.getElementById("number").href = "https://cdn.glitch.global/431933b3-8620-4289-a2a0-ee5ed28d7390/19.pdf?v=1721147874849";
       document.getElementById("number").innerHTML = "Coloring activity 5!";
        document.getElementById("number").setAttribute("download", "19.pdf");
      break;
  }
}