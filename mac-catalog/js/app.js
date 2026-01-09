(function(){
  const byId = (id)=>document.getElementById(id);
  const catalogEl = byId('catalog');
  const cardTpl = document.getElementById('productCardTpl');
  const modal = byId('productModal');
  const modalClose = byId('modalClose');
  const searchInput = byId('searchInput');
  const categorySelect = byId('categorySelect');
  const finishSelect = byId('finishSelect');
  const sortSelect = byId('sortSelect');
  const priceRange = byId('priceRange');
  const priceValue = byId('priceValue');
  const chips = byId('activeChips');

  const state = {
    query: '',
    category: 'all',
    finish: 'all',
    sort: 'popularity',
    maxPrice: parseInt(priceRange.value,10)
  };

  // Generate a crisp SVG placeholder with product name initials
  function placeholderSVG(text){
    const bg = '#11131a';
    const fg = '#ffffff';
    const t = encodeURIComponent(text.toUpperCase());
    return `data:image/svg+xml;utf8,` +
      `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>`+
      `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>`+
      `<stop offset='0%' stop-color='%23ff2a6d'/><stop offset='100%' stop-color='%23a855f7'/></linearGradient></defs>`+
      `<rect width='100%' height='100%' fill='${bg}'/>`+
      `<rect x='0' y='0' width='100%' height='100%' fill='url(%23g)' opacity='0.18'/>`+
      `<text x='50%' y='54%' text-anchor='middle' font-size='72' font-family='Inter,Arial' fill='${fg}' font-weight='800'>${t}</text>`+
      `</svg>`;
  }

  function formatINR(n){
    return new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);
  }

  function renderChips(){
    chips.innerHTML = '';
    const list = [];
    if(state.query) list.push(`Search: "${state.query}"`);
    if(state.category!=='all') list.push(`Category: ${state.category}`);
    if(state.finish!=='all') list.push(`Finish: ${state.finish}`);
    if(state.maxPrice < 7000) list.push(`≤ ₹${state.maxPrice.toLocaleString('en-IN')}`);
    list.forEach(t=>{
      const span = document.createElement('span');
      span.className='chip';
      span.textContent=t;
      chips.appendChild(span);
    });
  }

  function applyFilters(products){
    const q = state.query.trim().toLowerCase();
    let filtered = products.filter(p=>
      (state.category==='all' || p.category===state.category) &&
      (state.finish==='all' || (p.finish||'').toLowerCase()===state.finish.toLowerCase()) &&
      (p.priceINR||0) <= state.maxPrice &&
      (
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.key_benefits||[]).some(b=>b.toLowerCase().includes(q)) ||
        (p.type||'').toLowerCase().includes(q)
      )
    );

    switch(state.sort){
      case 'price-asc': filtered.sort((a,b)=>a.priceINR-b.priceINR); break;
      case 'price-desc': filtered.sort((a,b)=>b.priceINR-a.priceINR); break;
      case 'name-asc': filtered.sort((a,b)=>a.name.localeCompare(b.name)); break;
      case 'rating-desc': filtered.sort((a,b)=> (b.rating||0)-(a.rating||0)); break;
      default: filtered.sort((a,b)=> (b.popularity||0)-(a.popularity||0));
    }

    return filtered;
  }

  function render(products){
    catalogEl.innerHTML='';
    const frag = document.createDocumentFragment();
    products.forEach(p=>{
      const node = cardTpl.content.cloneNode(true);
      const card = node.querySelector('.card');
      const img = node.querySelector('.card-img');
      const title = node.querySelector('.card-title');
      const meta = node.querySelector('.card-meta');
      const desc = node.querySelector('.card-desc');
      const price = node.querySelector('.price');
      const rating = node.querySelector('.rating');
      const swatches = node.querySelector('.swatches');
      const viewBtn = node.querySelector('.viewBtn');

      card.dataset.id = p.id;
      img.src = p.image || placeholderSVG(p.name);
      img.alt = p.name;
      title.textContent = p.name;
      meta.textContent = `${p.category} • ${p.finish || '—'} • ${p.size || ''}`.replace(/ • \s*• /,' • ');
      desc.textContent = p.description;
      price.textContent = formatINR(p.priceINR);
      rating.textContent = `★ ${(p.rating||0).toFixed(1)}`;

      (p.shades||[]).slice(0,8).forEach(s=>{
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.title = s.name;
        dot.style.background = s.hex || '#bdbdbd';
        swatches.appendChild(dot);
      });

      viewBtn.addEventListener('click',()=>openModal(p));
      frag.appendChild(node);
    });
    catalogEl.appendChild(frag);
  }

  function openModal(p){
    document.getElementById('modalImg').src = p.image || placeholderSVG(p.name);
    document.getElementById('modalTitle').textContent = p.name;
    document.getElementById('modalMeta').textContent = `${p.category} • ${p.type||''} • ${p.finish||''}`.replace(/ • \s*• /,' • ');
    document.getElementById('modalDesc').textContent = p.description;
    document.getElementById('modalPrice').textContent = `${formatINR(p.priceINR)}  |  ${p.size||''}`;

    const ben = document.getElementById('modalBenefits');
    ben.innerHTML='';
    (p.key_benefits||[]).forEach(b=>{ const li=document.createElement('li'); li.textContent=b; ben.appendChild(li); });

    const det = document.getElementById('modalDetails');
    det.innerHTML='';
    const details = [
      ['Coverage', p.coverage],
      ['Finish', p.finish],
      ['Wear', p.wear_time],
      ['SPF', p.spf],
      ['Derm-Tested', p.derm_tested?'Yes':'—'],
    ].filter(([,v])=>v);
    details.forEach(([k,v])=>{ const li=document.createElement('li'); li.textContent=`${k}: ${v}`; det.appendChild(li); });

    const shadeWrap = document.getElementById('modalShades');
    shadeWrap.innerHTML='';
    (p.shades||[]).forEach(s=>{ const d=document.createElement('div'); d.className='dot'; d.title=`${s.name}`; d.style.background = s.hex || '#bdbdbd'; shadeWrap.appendChild(d); });

    const link = document.getElementById('modalLink');
    if(p.buyLink){ link.href = p.buyLink; link.style.display='inline-flex'; }
    else { link.href = '#'; link.style.display='none'; }

    modal.showModal();
  }

  function update(){
    priceValue.textContent = `≤ ₹${state.maxPrice.toLocaleString('en-IN')}`;
    renderChips();
    render(applyFilters(window.PRODUCTS||[]));
  }

  // Events
  modalClose.addEventListener('click',()=>modal.close());
  searchInput.addEventListener('input', e=>{ state.query = e.target.value; update(); });
  categorySelect.addEventListener('change', e=>{ state.category = e.target.value; update(); });
  finishSelect.addEventListener('change', e=>{ state.finish = e.target.value; update(); });
  sortSelect.addEventListener('change', e=>{ state.sort = e.target.value; update(); });
  priceRange.addEventListener('input', e=>{ state.maxPrice = parseInt(e.target.value,10); update(); });

  // Init
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && modal.open) modal.close(); });
  update();
})();
