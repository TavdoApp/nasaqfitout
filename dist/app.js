const menu=document.querySelector('#menu');
menu?.addEventListener('click',()=>{
  const isAr = document.documentElement.lang === 'ar';
  const open=document.querySelector('nav').classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
  menu.textContent=open?(isAr?'إغلاق':'Close'):(isAr?'القائمة':'Menu');
});

let submitAction='whatsapp';
document.querySelectorAll('#enquiry button[data-action]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    submitAction=btn.getAttribute('data-action')||'whatsapp';
  });
});

document.querySelector('#enquiry')?.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const name=data.get('name')||'';
  const phone=data.get('phone')||'';
  const email=data.get('email')||'';
  const type=data.get('type')||'';
  const loc=data.get('location')||'';
  const details=data.get('details')||'';

  const isAr = document.documentElement.lang === 'ar';
  const summary = isAr
    ? `مرحباً فريق نسق، أود طلب عرض أسعار لأعمال الفيت آوت والديكور.\n\n`+
      `• الاسم: ${name}\n`+
      `• الهاتف / واتساب: ${phone}\n`+
      `• البريد الإلكتروني: ${email}\n`+
      `• نوع المشروع: ${type}\n`+
      `• الموقع: ${loc}\n`+
      `• التفاصيل والمساحة: ${details}`
    : `Hello NASAQ, I would like a fit-out quotation.\n\n`+
      `• Name: ${name}\n`+
      `• Phone: ${phone}\n`+
      `• Email: ${email}\n`+
      `• Project Type: ${type}\n`+
      `• Location: ${loc}\n`+
      `• Scope & Details: ${details}`;

  if(submitAction==='email'){
    const subject=encodeURIComponent(isAr ? `طلب عرض أسعار فيت آوت نسق: ${type} - ${loc}` : `NASAQ Fit-Out Quotation Request: ${type} - ${loc}`);
    const body=encodeURIComponent(summary);
    window.location.href=`mailto:info@nasaqfitout.ae?cc=ossama@nasaqfitout.ae&subject=${subject}&body=${body}`;
  }else{
    window.location.href=`https://wa.me/971505334861?text=${encodeURIComponent(summary)}`;
  }
});


// Instant WhatsApp Fit-Out Estimator
function initEstimators(){
  document.querySelectorAll('.fitout-estimator').forEach(estimator=>{
    const isAr = document.documentElement.lang === 'ar';
    const typeSelect = estimator.querySelector('.est-type');
    const locSelect = estimator.querySelector('.est-loc');
    const timeSelect = estimator.querySelector('.est-time');
    const waBtn = estimator.querySelector('.est-whatsapp-btn');

    function update(){
      const type = typeSelect ? typeSelect.value : '';
      const loc = locSelect ? locSelect.value : '';
      const time = timeSelect ? timeSelect.value : '';

      const text = isAr
        ? 'مرحباً فريق نسق، استخدمت حاسبة التقدير السريع على موقعكم:\n\n' +
          '• نوع المشروع: ' + type + '\n' +
          '• المجمع / الموقع: ' + loc + '\n' +
          '• الجدول الزمني المطلوب: ' + time + '\n\n' +
          'أرجو تزويدي بالتقدير الأولي وتفاصيل المعاينة وموافقات المبنى.'
        : 'Hello NASAQ, I used the instant fit-out estimator on your website:\n\n' +
          '• Project Vision: ' + type + '\n' +
          '• Community / Location: ' + loc + '\n' +
          '• Preferred Timeline: ' + time + '\n\n' +
          'Please provide the preliminary estimate and discuss the site survey and building gate pass.';

      if(waBtn){
        waBtn.href = 'https://wa.me/971505334861?text=' + encodeURIComponent(text);
      }
    }

    [typeSelect, locSelect, timeSelect].forEach(sel => {
      sel && sel.addEventListener('change', update);
    });
    update();
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEstimators);
} else {
  initEstimators();
}
