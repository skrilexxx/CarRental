import { writable } from 'svelte/store';

export const mapLocations = {
    default: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83421.31214279987!2d16.495560422874227!3d49.20215295793244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712943ac03f5111%3A0x400af0f6614b1b0!2sBrno!5e0!3m2!1sen!2scz!4v1705945895973!5m2!1sen!2scz',
    krpole: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.1358066540374!2d16.606107544932083!3d49.216951492427064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129472061d2553%3A0x5b8fe721df46e80!2sNC%20Kr%C3%A1lovo%20Pole!5e0!3m2!1sen!2scz!4v1705945028585!5m2!1sen!2scz',
    hlNadr: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.4055477897273!2d16.611350776771225!3d49.19286577710976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129457cc9c75cb%3A0x38d028170537053c!2sBene%C5%A1ova%2052%2C%20602%2000%20Brno-st%C5%99ed!5e0!3m2!1sen!2scz!4v1705945925083!5m2!1sen!2scz',
    vankovka: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1303.840865009008!2d16.613542212475462!3d49.18762571988811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471295206098980d%3A0x2cb41d3d3431e666!2zUGFya292acWhdMSbIE9HIFZhxYhrb3ZrYSwgdmplemQgdWwuIFRybml0w6E!5e0!3m2!1sen!2scz!4v1705945993391!5m2!1sen!2scz',
    turany: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10438.826936133719!2d16.687310818605066!3d49.14919228731615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712ea94ab12a3bb%3A0xe3a6ad1f6749751!2zQnJub-KAk1R1xZlhbnkgQWlycG9ydA!5e0!3m2!1sen!2scz!4v1705946066415!5m2!1sen!2scz'
 };

 let today = new Date();
 let dd = today.getDate();
 let mm = today.getMonth()+1;
 let yyyy = today.getFullYear();
 if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

let date = yyyy + "-" + mm + "-" + dd;



export let pickupLocation = writable("Pick-up location");
export let dropoffLocation = writable("Drop-off location");
export let pickupdate = writable(date);
export let dropoffdate = writable(date);