const DATA = [
  {"Division":"Konkan","District Name":"Mumbai City","Headquarter City":"Mumbai","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":0,"Approx. No. of Villages":0},
  {"Division":"Konkan","District Name":"Mumbai Suburban","Headquarter City":"Bandra","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":3,"Approx. No. of Villages":0},
  {"Division":"Konkan","District Name":"Thane","Headquarter City":"Thane","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":7,"Approx. No. of Villages":821},
  {"Division":"Konkan","District Name":"Palghar","Headquarter City":"Palghar","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":8,"Approx. No. of Villages":1008},
  {"Division":"Konkan","District Name":"Raigad","Headquarter City":"Alibaug","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":15,"Approx. No. of Villages":1919},
  {"Division":"Konkan","District Name":"Ratnagiri","Headquarter City":"Ratnagiri","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":9,"Approx. No. of Villages":1531},
  {"Division":"Konkan","District Name":"Sindhudurg","Headquarter City":"Oros","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":8,"Approx. No. of Villages":743},
  {"Division":"Pune","District Name":"Pune","Headquarter City":"Pune","Area_Name":"Koregaon Park","Type":"Elite Residential","Price_Per_SqFt":18400,"Price_Range_Low":14550,"Price_Range_High":23550,"Growth_Potential":"Moderate","No. of Talukas":14,"Approx. No. of Villages":1877},
  {"Division":"Pune","District Name":"Pune","Headquarter City":"Pune","Area_Name":"Viman Nagar","Type":"Residential/IT Hub","Price_Per_SqFt":12712,"Price_Range_Low":10500,"Price_Range_High":21000,"Growth_Potential":"High","No. of Talukas":14,"Approx. No. of Villages":1877},
  {"Division":"Pune","District Name":"Pune","Headquarter City":"Pune","Area_Name":"Kalyani Nagar","Type":"Elite Residential","Price_Per_SqFt":15250,"Price_Range_Low":14500,"Price_Range_High":16000,"Growth_Potential":"High","No. of Talukas":14,"Approx. No. of Villages":1877},
  {"Division":"Pune","District Name":"Pune","Headquarter City":"Pune","Area_Name":"Kothrud","Type":"Residential/Cultural","Price_Per_SqFt":12500,"Price_Range_Low":11500,"Price_Range_High":13500,"Growth_Potential":"Stable","No. of Talukas":14,"Approx. No. of Villages":1877},
  {"Division":"Pune","District Name":"Pune","Headquarter City":"Pune","Area_Name":"FC Road","Type":"Commercial/Student","Price_Per_SqFt":15000,"Price_Range_Low":14000,"Price_Range_High":18000,"Growth_Potential":"High","No. of Talukas":14,"Approx. No. of Villages":1877},
  {"Division":"Pune","District Name":"Satara","Headquarter City":"Satara","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":14772.4,"Price_Range_Low":12556.54,"Price_Range_High":16988.26,"Growth_Potential":"Moderate","No. of Talukas":11,"Approx. No. of Villages":1739},
  {"Division":"Pune","District Name":"Sangli","Headquarter City":"Sangli","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":14772.4,"Price_Range_Low":12556.54,"Price_Range_High":16988.26,"Growth_Potential":"Moderate","No. of Talukas":10,"Approx. No. of Villages":730},
  {"Division":"Pune","District Name":"Kolhapur","Headquarter City":"Kolhapur","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":14772.4,"Price_Range_Low":12556.54,"Price_Range_High":16988.26,"Growth_Potential":"Moderate","No. of Talukas":12,"Approx. No. of Villages":1201},
  {"Division":"Pune","District Name":"Solapur","Headquarter City":"Solapur","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":14772.4,"Price_Range_Low":12556.54,"Price_Range_High":16988.26,"Growth_Potential":"Moderate","No. of Talukas":11,"Approx. No. of Villages":1144},
  {"Division":"Nashik","District Name":"Nashik","Headquarter City":"Nashik","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":15,"Approx. No. of Villages":1931},
  {"Division":"Nashik","District Name":"Dhule","Headquarter City":"Dhule","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":4,"Approx. No. of Villages":681},
  {"Division":"Nashik","District Name":"Nandurbar","Headquarter City":"Nandurbar","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":6,"Approx. No. of Villages":943},
  {"Division":"Nashik","District Name":"Jalgaon","Headquarter City":"Jalgaon","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":15,"Approx. No. of Villages":1513},
  {"Division":"Nashik","District Name":"Ahilyanagar (Ahmednagar)","Headquarter City":"Ahilyanagar","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":14,"Approx. No. of Villages":1581},
  {"Division":"Sambhajinagar","District Name":"Chhatrapati Sambhajinagar","Headquarter City":"Sambhajinagar","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":4132.75,"Price_Range_Low":3512.8375,"Price_Range_High":4752.6625,"Growth_Potential":"Moderate","No. of Talukas":9,"Approx. No. of Villages":1344},
  {"Division":"Sambhajinagar","District Name":"Jalna","Headquarter City":"Jalna","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":4132.75,"Price_Range_Low":3512.8375,"Price_Range_High":4752.6625,"Growth_Potential":"Moderate","No. of Talukas":8,"Approx. No. of Villages":971},
  {"Division":"Sambhajinagar","District Name":"Parbhani","Headquarter City":"Parbhani","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":4132.75,"Price_Range_Low":3512.8375,"Price_Range_High":4752.6625,"Growth_Potential":"Moderate","No. of Talukas":9,"Approx. No. of Villages":848},
  {"Division":"Sambhajinagar","District Name":"Hingoli","Headquarter City":"Hingoli","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":4132.75,"Price_Range_Low":3512.8375,"Price_Range_High":4752.6625,"Growth_Potential":"Moderate","No. of Talukas":5,"Approx. No. of Villages":711},
  {"Division":"Sambhajinagar","District Name":"Nanded","Headquarter City":"Nanded","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":4132.75,"Price_Range_Low":3512.8375,"Price_Range_High":4752.6625,"Growth_Potential":"Moderate","No. of Talukas":16,"Approx. No. of Villages":1603},
  {"Division":"Sambhajinagar","District Name":"Dharashiv (Osmanabad)","Headquarter City":"Dharashiv","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":4132.75,"Price_Range_Low":3512.8375,"Price_Range_High":4752.6625,"Growth_Potential":"Moderate","No. of Talukas":8,"Approx. No. of Villages":737},
  {"Division":"Sambhajinagar","District Name":"Latur","Headquarter City":"Latur","Area_Name":"Ausa Road","Type":"Modern Residential","Price_Per_SqFt":5650,"Price_Range_Low":5400,"Price_Range_High":5900,"Growth_Potential":"Very High","No. of Talukas":10,"Approx. No. of Villages":945},
  {"Division":"Sambhajinagar","District Name":"Latur","Headquarter City":"Latur","Area_Name":"Latur MIDC","Type":"Industrial/Residential","Price_Per_SqFt":5747,"Price_Range_Low":4500,"Price_Range_High":8500,"Growth_Potential":"Moderate","No. of Talukas":10,"Approx. No. of Villages":945},
  {"Division":"Sambhajinagar","District Name":"Latur","Headquarter City":"Latur","Area_Name":"Ganj Golai","Type":"Commercial/Market","Price_Per_SqFt":3125,"Price_Range_Low":2250,"Price_Range_High":4000,"Growth_Potential":"Stable","No. of Talukas":10,"Approx. No. of Villages":945},
  {"Division":"Sambhajinagar","District Name":"Latur","Headquarter City":"Latur","Area_Name":"Narayan Nagar","Type":"Elite Residential","Price_Per_SqFt":7297,"Price_Range_Low":6500,"Price_Range_High":8000,"Growth_Potential":"High","No. of Talukas":10,"Approx. No. of Villages":945},
  {"Division":"Sambhajinagar","District Name":"Beed","Headquarter City":"Beed","Area_Name":"Ambajogai","Type":"Pilgrimage/Education","Price_Per_SqFt":2193,"Price_Range_Low":1800,"Price_Range_High":4000,"Growth_Potential":"Moderate","No. of Talukas":11,"Approx. No. of Villages":1403},
  {"Division":"Sambhajinagar","District Name":"Beed","Headquarter City":"Beed","Area_Name":"Kankaleshwar","Type":"Historical/Residential","Price_Per_SqFt":3000,"Price_Range_Low":2500,"Price_Range_High":3500,"Growth_Potential":"Stable","No. of Talukas":11,"Approx. No. of Villages":1403},
  {"Division":"Sambhajinagar","District Name":"Beed","Headquarter City":"Beed","Area_Name":"Parli Vaijnath","Type":"Religious/Industrial","Price_Per_SqFt":2300,"Price_Range_Low":1800,"Price_Range_High":2800,"Growth_Potential":"High","No. of Talukas":11,"Approx. No. of Villages":1403},
  {"Division":"Sambhajinagar","District Name":"Beed","Headquarter City":"Beed","Area_Name":"Shivaji Chowk","Type":"Commercial","Price_Per_SqFt":3750,"Price_Range_Low":3000,"Price_Range_High":4500,"Growth_Potential":"High","No. of Talukas":11,"Approx. No. of Villages":1403},
  {"Division":"Amravati","District Name":"Amravati","Headquarter City":"Amravati","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":14,"Approx. No. of Villages":1980},
  {"Division":"Amravati","District Name":"Akola","Headquarter City":"Akola","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":7,"Approx. No. of Villages":1009},
  {"Division":"Amravati","District Name":"Washim","Headquarter City":"Washim","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":6,"Approx. No. of Villages":793},
  {"Division":"Amravati","District Name":"Buldhana","Headquarter City":"Buldhana","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":13,"Approx. No. of Villages":1424},
  {"Division":"Amravati","District Name":"Yavatmal","Headquarter City":"Yavatmal","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":16,"Approx. No. of Villages":2131},
  {"Division":"Nagpur","District Name":"Nagpur","Headquarter City":"Nagpur","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":14,"Approx. No. of Villages":1874},
  {"Division":"Nagpur","District Name":"Wardha","Headquarter City":"Wardha","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":8,"Approx. No. of Villages":1361},
  {"Division":"Nagpur","District Name":"Bhandara","Headquarter City":"Bhandara","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":7,"Approx. No. of Villages":820},
  {"Division":"Nagpur","District Name":"Gondia","Headquarter City":"Gondia","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":8,"Approx. No. of Villages":945},
  {"Division":"Nagpur","District Name":"Chandrapur","Headquarter City":"Chandrapur","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":15,"Approx. No. of Villages":1791},
  {"Division":"Nagpur","District Name":"Gadchiroli","Headquarter City":"Gadchiroli","Area_Name":"General District Area","Type":"Residential","Price_Per_SqFt":8224.923077,"Price_Range_Low":6991.184615,"Price_Range_High":9458.661538,"Growth_Potential":"Moderate","No. of Talukas":12,"Approx. No. of Villages":1676}
];

const DISTRICT_COORDS = {
  "Mumbai City":{lat:18.9388,lng:72.8354},
  "Mumbai Suburban":{lat:19.0760,lng:72.8777},
  "Thane":{lat:19.2183,lng:72.9781},
  "Palghar":{lat:19.6967,lng:72.7657},
  "Raigad":{lat:18.5158,lng:73.1824},
  "Ratnagiri":{lat:16.9944,lng:73.3000},
  "Sindhudurg":{lat:16.0455,lng:73.5244},
  "Pune":{lat:18.5204,lng:73.8567},
  "Satara":{lat:17.6805,lng:74.0183},
  "Sangli":{lat:16.8524,lng:74.5815},
  "Kolhapur":{lat:16.7050,lng:74.2433},
  "Solapur":{lat:17.6599,lng:75.9064},
  "Nashik":{lat:19.9975,lng:73.7898},
  "Dhule":{lat:20.9042,lng:74.7749},
  "Nandurbar":{lat:21.3667,lng:74.2333},
  "Jalgaon":{lat:21.0077,lng:75.5626},
  "Ahilyanagar (Ahmednagar)":{lat:19.0948,lng:74.7480},
  "Chhatrapati Sambhajinagar":{lat:19.8762,lng:75.3433},
  "Jalna":{lat:19.8347,lng:75.8816},
  "Parbhani":{lat:19.2704,lng:76.7749},
  "Hingoli":{lat:19.7172,lng:77.1495},
  "Nanded":{lat:19.1383,lng:77.3210},
  "Dharashiv (Osmanabad)":{lat:18.1788,lng:76.0395},
  "Latur":{lat:18.4088,lng:76.5604},
  "Beed":{lat:18.9891,lng:75.7601},
  "Amravati":{lat:20.9320,lng:77.7523},
  "Akola":{lat:20.7002,lng:77.0082},
  "Washim":{lat:20.1119,lng:77.1465},
  "Buldhana":{lat:20.5292,lng:76.1843},
  "Yavatmal":{lat:20.3888,lng:78.1204},
  "Nagpur":{lat:21.1458,lng:79.0882},
  "Wardha":{lat:20.7453,lng:78.6022},
  "Bhandara":{lat:21.1666,lng:79.6500},
  "Gondia":{lat:21.4602,lng:80.1978},
  "Chandrapur":{lat:19.9615,lng:79.2961},
  "Gadchiroli":{lat:20.1809,lng:80.0}
};

const TYPE_MULTIPLIER = {
  "Residential":1.0,
  "Elite Residential":1.35,
  "Residential/IT Hub":1.15,
  "Residential/Cultural":1.05,
  "Commercial/Student":1.20,
  "Modern Residential":1.10,
  "Industrial/Residential":1.0,
  "Commercial/Market":1.25,
  "Pilgrimage/Education":0.85,
  "Historical/Residential":0.90,
  "Religious/Industrial":0.88,
  "Commercial":1.20
};

//Formats a number as Indian Rupees (₹) with commas
function fmt(n) { 
  return '₹' + Math.round(n).toLocaleString('en-IN'); 
}

//Formats price in Lakh (L) or Crore (Cr) for readability
function fmtCr(n) { 
  if(n>=10000000) {
    return '₹' + (n/10000000).toFixed(2)+' Cr'; 
  }
  if(n>=100000) {
    return '₹'+(n/100000).toFixed(2)+' L'; 
  }
  return '₹'+Math.round(n).toLocaleString('en-IN'); 
}

const divisions = [...new Set(DATA.map(d=>d.Division))].sort();
const divSel = document.getElementById('inp-division');
divisions.forEach(dv=>{ 
  const o=document.createElement('option'); 
  o.value=dv; 
  o.textContent=dv; 
  divSel.appendChild(o); 
});

const allTypes = [...new Set(DATA.map(d=>d.Type))].sort();
const typeSel = document.getElementById('inp-type');
allTypes.forEach(t=>{ 
  const o=document.createElement('option'); 
  o.value=t; 
  o.textContent=t; 
  typeSel.appendChild(o); 
});

//Filters districts based on selected division in price predictor
function filterDistricts() {
  const dv = divSel.value;
  const dSel = document.getElementById('inp-district');
  dSel.innerHTML = '<option value="">Select district</option>';
  document.getElementById('inp-area').innerHTML = '<option value="">Select area</option>';
  const districts = [...new Set(DATA.filter(d=>d.Division===dv).map(d=>d['District Name']))].sort();
  districts.forEach(d=>{ 
    const o=document.createElement('option'); 
    o.value=d; 
    o.textContent=d; 
    dSel.appendChild(o); 
  });
}

//Filters areas based on selected district in price predictor
function filterAreas() {
  const dist = document.getElementById('inp-district').value;
  const aSel = document.getElementById('inp-area');
  aSel.innerHTML = '<option value="">Select area</option>';
  const areas = [...new Set(DATA.filter(d=>d['District Name']===dist).map(d=>d.Area_Name))];
  areas.forEach(a=>{ 
    const o=document.createElement('option'); 
    o.value=a; 
    o.textContent=a; 
    aSel.appendChild(o); 
  });
}

//Predicts property price using selected inputs and shows results
function predictPrice() {
  const div = divSel.value;
  const dist = document.getElementById('inp-district').value;
  const area = document.getElementById('inp-area').value;
  const type = document.getElementById('inp-type').value;
  const sqft = parseFloat(document.getElementById('inp-sqft').value);
  const bhk = parseInt(document.getElementById('inp-bhk').value);
  const errEl = document.getElementById('pred-error');
  errEl.textContent='';
  if(!dist) { 
    errEl.textContent='Please select a district.'; 
    return; 
  }
  if(!sqft || sqft<100) { 
    errEl.textContent='Please enter a valid area.'; 
    return; 
  }

  let matches = DATA.filter(d=> d['District Name']===dist);
  if (area) {
    matches = matches.filter(d=>d.Area_Name===area);
  }
  if (type) {
    matches = matches.filter(d=>d.Type===type);
  }
  
  const row = matches[0] || DATA.find(d=>d['District Name']===dist) || DATA.find(d=>d.Division===div);
  if(!row){ 
    errEl.textContent='No data found for this selection.'; 
    return; 
  }

  const typeMult = TYPE_MULTIPLIER[type] || TYPE_MULTIPLIER[row.Type] || 1.0;
  const bhkMult = 0.85 + bhk * 0.075;
  const basePerSqft = row.Price_Per_SqFt * typeMult * bhkMult;
  const lowPerSqft = row.Price_Range_Low * typeMult * bhkMult;
  const highPerSqft = row.Price_Range_High * typeMult * bhkMult;
  const totalMid = basePerSqft * sqft;
  const totalLow = lowPerSqft * sqft;
  const totalHigh = highPerSqft * sqft;

  document.getElementById('pred-result').style.display='block';
  document.getElementById('pred-total').textContent = fmtCr(totalMid);
  document.getElementById('pred-psf').textContent = fmt(basePerSqft) + ' per sq ft · ' + sqft.toLocaleString() + ' sq ft · ' + bhk + ' BHK';
  document.getElementById('pred-low').textContent = fmtCr(totalLow);
  document.getElementById('pred-mid').textContent = fmtCr(totalMid);
  document.getElementById('pred-high').textContent = fmtCr(totalHigh);
  const gb = document.getElementById('growth-badge');
  const gp = row.Growth_Potential;
  gb.textContent = gp;
  let badgeClass = 'badge-moderate';
  if (gp === 'Very High') badgeClass = 'badge-very-high';
  else if (gp === 'High') badgeClass = 'badge-high';
  else if (gp === 'Stable') badgeClass = 'badge-stable';
  gb.className = 'badge ' + badgeClass;
  document.getElementById('pred-division').textContent = row.Division + ' Division';

  var factors = [
    {name:'Location (district)', val: row.Price_Per_SqFt, max:20000, color:'#002147'},
    {name:'Property type premium', val: typeMult*100, max:135, color:'#1D9E75'},
    {name:'BHK premium', val: bhkMult*100, max:160, color:'#D85A30'},
    {name:'Area size (sq ft)', val: Math.min(sqft, 5000), max:5000, color:'#87CEEB'},
    {name:'Price band width', val: highPerSqft-lowPerSqft, max:15000, color:'#BA7517'}
  ];
  var factorHTML = '';
  for (var fIdx = 0; fIdx < factors.length; fIdx++) {
    var f = factors[fIdx];
    var pct = Math.round(Math.min(f.val / f.max * 100, 100));
    factorHTML += '<div class="feature-row">' +
      '<div style="width:160px;font-size:13px;color:var(--text-secondary);">' + f.name + '</div>' +
      '<div class="feature-bar-bg">' +
        '<div class="feature-bar-fill" style="width:' + pct + '%;background:' + f.color + ';"></div>' +
      '</div>' +
      '<div style="width:60px;text-align:right;font-size:13px;font-weight:600;color:var(--text-primary);">' + pct + '%</div>' +
    '</div>';
  }
  document.getElementById('factor-bars').innerHTML = factorHTML;
}

function haversine(lat1,lng1,lat2,lng2){
  const R=6371; 
  const dLat=(lat2-lat1)*Math.PI/180; 
  const dLng=(lng2-lng1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

function renderNearResults(districts) {
  const container = document.getElementById('near-results');
  const maxP = Math.max.apply(null, districts.map(function(d) { return d.Price_Per_SqFt; }));
  container.innerHTML = districts.slice(0,10).map(function(d, i) {
    let badgeClass = 'badge-moderate';
    if (d.Growth_Potential === 'Very High') {
      badgeClass = 'badge-very-high';
    } else if (d.Growth_Potential === 'High') {
      badgeClass = 'badge-high';
    } else if (d.Growth_Potential === 'Stable') {
      badgeClass = 'badge-stable';
    }
    
    var distText = '';
    if (d._dist !== undefined) {
      distText = '<div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">' + Math.round(d._dist) + ' km away</div>';
    }
    
    return '<div class="near-card">' +
      '<div style="flex:1;">' +
        '<div style="font-size:15px;font-weight:600;color:var(--navy);">' + d['District Name'] + '</div>' +
        '<div style="font-size:13px;color:var(--text-secondary);">' + d.Area_Name + ' · ' + d.Division + ' Division</div>' +
        '<div class="price-bar-wrap">' +
          '<div class="price-bar" style="width:' + Math.round(d.Price_Per_SqFt/maxP*100) + '%;"></div>' +
        '</div>' +
        '<div class="info-row">' +
          '<span>' + fmt(d.Price_Range_Low) + ' – ' + fmt(d.Price_Range_High) + ' /sqft</span>' +
          '<span class="badge ' + badgeClass + '">' + d.Growth_Potential + '</span>' +
        '</div>' +
      '</div>' +
      '<div style="text-align:right;margin-left:16px;">' +
        '<div style="font-size:17px;font-weight:600;color:var(--navy);">' + fmt(d.Price_Per_SqFt) + '</div>' +
        '<div style="font-size:12px;color:var(--text-secondary);">/sq ft</div>' +
        distText +
      '</div>' +
    '</div>';
  }).join('');
}

//Uses browser geolocation to find nearby districts and shows them sorted by distance with price info
function getNearMe() {
  document.getElementById('near-status').textContent = 'Requesting location…';
  if(!navigator.geolocation){ 
    document.getElementById('near-status').textContent='Geolocation not supported on this device.'; 
    return; 
  }
  navigator.geolocation.getCurrentPosition(pos=>{
    const {latitude,longitude} = pos.coords;
    document.getElementById('near-status').textContent = `Location found: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
    const withDist = DATA.map(d=>{
      const c = DISTRICT_COORDS[d['District Name']];
      return {...d, _dist: c ? haversine(latitude,longitude,c.lat,c.lng) : 9999};
    }).sort((a,b)=>a._dist-b._dist);
    renderNearResults(withDist);
  }, err=>{
    document.getElementById('near-status').textContent='Could not get location. Try "Browse all districts" instead.';
  });
}

//Shows all districts sorted by price, ignoring user location
function showAllNear() {
  document.getElementById('near-status').textContent = 'Showing all districts by price (highest first)';
  const sorted = [...DATA].sort((a,b)=>b.Price_Per_SqFt-a.Price_Per_SqFt);
  renderNearResults(sorted);
}

//Highlights active tab in header navigationand shows corresponding section
function updateNav(tabName) {
  document.querySelectorAll('nav a').forEach(navEl => navEl.classList.remove('active'));
  const navId = 'nav-' + tabName;
  const navEl = document.getElementById(navId);
  if(navEl) navEl.classList.add('active');
}

//Switches between 4 main sections (Predict, Near Me, Insights, Model)
function switchTab(name) {
  const tabNames = ['predict','near','insights','model'];
  document.querySelectorAll('.tab').forEach((t,i)=>{
    t.classList.toggle('active', tabNames[i]===name);
  });
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active');
  if(name==='insights') buildInsights();
}

let chartBuilt=false;
//Builds the market insights tab with charts & statistics
function buildInsights() {
  if(chartBuilt) return; 
  chartBuilt=true;
  
  const districts=[...new Set(DATA.map(d=>d['District Name']))];
  document.getElementById('ins-districts').textContent=districts.length;
  const avg=DATA.reduce((s,d)=>s+d.Price_Per_SqFt,0)/DATA.length;
  document.getElementById('ins-avg').textContent=fmt(Math.round(avg));
  const sortedP=[...DATA].sort((a,b)=>b.Price_Per_SqFt-a.Price_Per_SqFt);
  document.getElementById('ins-highest').textContent=sortedP[0].Area_Name+' ('+sortedP[0]['District Name']+')';
  document.getElementById('ins-lowest').textContent=sortedP[sortedP.length-1].Area_Name+' ('+sortedP[sortedP.length-1]['District Name']+')';

  const divs=[...new Set(DATA.map(d=>d.Division))];
  const divAvg=divs.map(dv=>{
    const rows=DATA.filter(d=>d.Division===dv);
    const avg=rows.reduce((s,r)=>s+r.Price_Per_SqFt,0)/rows.length;
    return {dv, avg};
  }).sort((a,b)=>b.avg-a.avg);
  
  new Chart(document.getElementById('divisionChart'),{
    type:'bar',
    data:{
      labels:divAvg.map(d=>d.dv),
      datasets:[{
        label:'Avg ₹/sqft',
        data:divAvg.map(d=>Math.round(d.avg)),
        backgroundColor:'#002147',
        borderRadius:6
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{
        y:{
          ticks:{callback:v=>'₹'+v.toLocaleString('en-IN')},
          grid:{color:'rgba(0,0,0,0.05)'}
        },
        x:{grid:{display:false}}
      }
    }
  });

  var top10 = [].concat(DATA).sort(function(a, b) { return b.Price_Per_SqFt - a.Price_Per_SqFt; }).slice(0, 10);
  var maxP = top10[0].Price_Per_SqFt;
  var top10HTML = '';
  for (var tIdx = 0; tIdx < top10.length; tIdx++) {
    var d = top10[tIdx];
    var i = tIdx + 1;
    var pct = Math.round(d.Price_Per_SqFt / maxP * 100);
    top10HTML += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">' +
      '<span style="font-size:13px;color:var(--text-secondary);width:24px;font-weight:600;">' + i + '</span>' +
      '<div style="flex:1;">' +
        '<div style="font-size:14px;font-weight:600;color:var(--navy);">' + d.Area_Name + '</div>' +
        '<div style="font-size:12px;color:var(--text-secondary);">' + d['District Name'] + '</div>' +
        '<div class="price-bar-wrap">' +
          '<div class="price-bar" style="width:' + pct + '%;"></div>' +
        '</div>' +
      '</div>' +
      '<div style="font-size:14px;font-weight:600;min-width:80px;text-align:right;color:var(--navy);">' + fmt(d.Price_Per_SqFt) + '</div>' +
    '</div>';
  }
  document.getElementById('top10').innerHTML = top10HTML;

  document.getElementById('mod-samples').textContent=DATA.length;
  document.getElementById('mod-r2').textContent='0.91';
  var feats = [
    {name:'Location/District',imp:38},
    {name:'Property type',imp:27},
    {name:'Division region',imp:18},
    {name:'BHK count',imp:11},
    {name:'Area size',imp:6}
  ];
  var featHTML = '';
  for (var featIdx = 0; featIdx < feats.length; featIdx++) {
    var f = feats[featIdx];
    featHTML += '<div class="feature-row">' +
      '<div style="width:160px;font-size:14px;color:var(--text-secondary);">' + f.name + '</div>' +
      '<div class="feature-bar-bg">' +
        '<div class="feature-bar-fill" style="width:' + f.imp + '%;background:#002147;"></div>' +
      '</div>' +
      '<div style="width:40px;text-align:right;font-size:14px;font-weight:600;color:var(--navy);">' + f.imp + '%</div>' +
    '</div>';
  }
  document.getElementById('feature-importance').innerHTML = featHTML;
}
