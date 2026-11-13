
(function() {
  'use strict';

  // ============ DATA ============
  const GRADIENTS = [
    'linear-gradient(135deg, #667eea, #764ba2)',
    'linear-gradient(135deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #4facfe, #00f2fe)',
    'linear-gradient(135deg, #fa709a, #fee140)',
    'linear-gradient(135deg, #30cfd0, #330867)',
    'linear-gradient(135deg, #a8edea, #fed6e3)',
    'linear-gradient(135deg, #ff9a9e, #fecfef)',
    'linear-gradient(135deg, #ffecd2, #fcb69f)',
    'linear-gradient(135deg, #ff6e7f, #bfe9ff)',
    'linear-gradient(135deg, #c471f5, #fa71cd)',
    'linear-gradient(135deg, #48c6ef, #6f86d6)',
    'linear-gradient(135deg, #f8b500, #fceabb)'
  ];

  const artists = [
    { id: 1, name: 'Luna Wave', genre: 'Dream Pop', icon: 'fa-moon', followers: '2.4M', tracks: 42 },
    { id: 2, name: 'Astral Bloom', genre: 'Electronic', icon: 'fa-star', followers: '1.8M', tracks: 38 },
    { id: 3, name: 'Yumi & The Lights', genre: 'Indie', icon: 'fa-bolt', followers: '3.1M', tracks: 56 },
    { id: 4, name: 'Echo Park', genre: 'Alternative', icon: 'fa-tree', followers: '890K', tracks: 24 },
    { id: 5, name: 'Velvet Dusk', genre: 'R&B', icon: 'fa-cloud-moon', followers: '1.2M', tracks: 31 },
    { id: 6, name: 'Neon Pulse', genre: 'Synthwave', icon: 'fa-wave-square', followers: '2.7M', tracks: 45 },
    { id: 7, name: 'Crystal Rain', genre: 'Pop', icon: 'fa-droplet', followers: '4.2M', tracks: 62 },
    { id: 8, name: 'Midnight Collective', genre: 'Hip Hop', icon: 'fa-city', followers: '3.5M', tracks: 48 },
    { id: 9, name: 'Solar Flare', genre: 'Rock', icon: 'fa-sun', followers: '1.5M', tracks: 29 },
    { id: 10, name: 'Aurora Skyline', genre: 'Ambient', icon: 'fa-cloud', followers: '720K', tracks: 18 },
    { id: 11, name: 'Rogue Frequency', genre: 'Electronic', icon: 'fa-signal', followers: '980K', tracks: 27 },
    { id: 12, name: 'Silk Road', genre: 'World', icon: 'fa-globe', followers: '1.9M', tracks: 33 }
  ];

  const tracks = [
    { id: 1, title: 'Neon Sky', artist: 'Astral Bloom', duration: '3:42', dur: 222, album: 'Midnight Echoes' },
    { id: 2, title: 'Lost in Tokyo', artist: 'Yumi & The Lights', duration: '4:15', dur: 255, album: 'Neon Dreams' },
    { id: 3, title: 'Velvet Dusk', artist: 'Echo Park', duration: '2:58', dur: 178, album: 'Twilight Sessions' },
    { id: 4, title: 'Fragments', artist: 'Luna Wave', duration: '3:21', dur: 201, album: 'Midnight Echoes' },
    { id: 5, title: 'Crystal Rain', artist: 'Crystal Rain', duration: '3:55', dur: 235, album: 'Prism' },
    { id: 6, title: 'Midnight Drive', artist: 'Neon Pulse', duration: '4:08', dur: 248, album: 'Retrograde' },
    { id: 7, title: 'Solar Winds', artist: 'Solar Flare', duration: '3:33', dur: 213, album: 'Ignition' },
    { id: 8, title: 'City Lights', artist: 'Midnight Collective', duration: '3:12', dur: 192, album: 'Concrete Poetry' },
    { id: 9, title: 'Aurora', artist: 'Aurora Skyline', duration: '5:20', dur: 320, album: 'Polaris' },
    { id: 10, title: 'Silk Route', artist: 'Silk Road', duration: '4:02', dur: 242, album: 'Nomad' },
    { id: 11, title: 'Frequency', artist: 'Rogue Frequency', duration: '3:18', dur: 198, album: 'Signal' },
    { id: 12, title: 'Echoes', artist: 'Luna Wave', duration: '3:44', dur: 224, album: 'Midnight Echoes' },
    { id: 13, title: 'Stardust', artist: 'Astral Bloom', duration: '4:30', dur: 270, album: 'Cosmic' },
    { id: 14, title: 'Paper Planes', artist: 'Yumi & The Lights', duration: '3:05', dur: 185, album: 'Origami' },
    { id: 15, title: 'Fall Apart', artist: 'Velvet Dusk', duration: '3:52', dur: 232, album: 'Fractured' }
  ];

  const playlists = [
    { id: 'chill', title: 'Chill Vibes', desc: 'Músicas relaxantes para desacelerar', icon: 'fa-moon', grad: 0, count: 45, tracks: [1, 3, 4, 9, 12] },
    { id: 'workout', title: 'Workout Mix', desc: 'Energia total para o treino', icon: 'fa-fire', grad: 1, count: 32, tracks: [6, 7, 11, 2] },
    { id: 'focus', title: 'Deep Focus', desc: 'Concentração máxima', icon: 'fa-brain', grad: 2, count: 28, tracks: [9, 10, 4, 12] },
    { id: 'party', title: 'Party Hits', desc: 'Os hits do momento', icon: 'fa-champagne-glasses', grad: 3, count: 56, tracks: [1, 2, 5, 6, 8] },
    { id: 'indie', title: 'Indie Essentials', desc: 'O melhor da cena indie', icon: 'fa-guitar', grad: 10, count: 40, tracks: [2, 3, 14] },
    { id: 'rnb', title: 'R&B Nights', desc: 'Smooth R&B para a noite', icon: 'fa-moon', grad: 4, count: 35, tracks: [5, 15, 12] },
    { id: 'electronic', title: 'Electronic Pulse', desc: 'Batidas eletrônicas', icon: 'fa-wave-square', grad: 5, count: 50, tracks: [1, 6, 11, 13] },
    { id: 'rock', title: 'Rock Anthems', desc: 'Hinos do rock', icon: 'fa-bolt', grad: 6, count: 44, tracks: [7, 3] },
    { id: 'discover', title: 'Descobrir Semanal', desc: 'Novos talentos para você', icon: 'fa-compass', grad: 7, count: 30, tracks: [10, 11, 13, 14] },
    { id: 'top50', title: 'Top 50 Global', desc: 'As mais tocadas do mundo', icon: 'fa-chart-line', grad: 8, count: 50, tracks: [1, 2, 5, 7, 8, 9, 12] },
    { id: 'new', title: 'Novidades', desc: 'Lançamentos fresquinhos', icon: 'fa-sparkles', grad: 9, count: 25, tracks: [4, 6, 15, 13] },
    { id: 'acoustic', title: 'Acústico', desc: 'Versões intimistas', icon: 'fa-guitar', grad: 11, count: 22, tracks: [3, 14, 15] },
    { id: 'trending', title: 'Tendências', desc: 'O que está bombando', icon: 'fa-arrow-trend-up', grad: 2, count: 48, tracks: [2, 8, 6, 1] }
  ];

  const newReleases = [
    { id: 13, title: 'Stardust', artist: 'Astral Bloom', duration: '4:30', dur: 270 },
    { id: 15, title: 'Fall Apart', artist: 'Velvet Dusk', duration: '3:52', dur: 232 },
    { id: 11, title: 'Frequency', artist: 'Rogue Frequency', duration: '3:18', dur: 198 },
    { id: 14, title: 'Paper Planes', artist: 'Yumi & The Lights', duration: '3:05', dur: 185 }
  ];

  // ============ STATE ============
  const state = {
    currentTrack: null,
    isPlaying: false,
    currentTime: 0,
    progressInterval: null,
    likedTracks: new Set([1, 5, 8]),
    currentPage: 'home',
    pageHistory: ['home'],
    historyIndex: 0,
    shuffle: false,
    repeat: false,
    volume: 70,
    queue: [],
    queueIndex: 0,
    searchTerm: '',
    currentGenre: 'all'
  };

  // ============ HELPERS ============
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function findTrack(id) {
    return tracks.find(t => t.id === id) || newReleases.find(t => t.id === id);
  }

  function getGradient(i) {
    return GRADIENTS[i % GRADIENTS.length];
  }

  function showToast(title, message, icon = 'fa-check') {
    const container = $('#toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon"><i class="fas ${icon}"></i></div>
      <div class="toast-content">
        <h5>${title}</h5>
        <p>${message}</p>
      </div>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ============ RENDER FUNCTIONS ============
  function renderTrending() {
    const list = $('#trendingList');
    const trending = [tracks[0], tracks[1], tracks[5], tracks[7], tracks[4], tracks[3]];
    list.innerHTML = trending.map((track, i) => `
      <div class="track-item ${state.currentTrack?.id === track.id ? 'playing' : ''}" data-track-id="${track.id}">
        <span class="track-number">${i + 1}</span>
        <div class="track-cover" style="background: ${getGradient(track.id)};">
          <i class="fas fa-music"></i>
        </div>
        <div class="track-info">
          <h4>${track.title}</h4>
          <p>${track.artist}</p>
        </div>
        <span class="track-duration">${track.duration}</span>
        <div class="track-actions">
          <button class="track-action-btn ${state.likedTracks.has(track.id) ? 'liked' : ''}" data-like="${track.id}">
            <i class="fas fa-heart"></i>
          </button>
          <button class="track-action-btn" data-add="${track.id}">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  function renderArtists(container, list = artists) {
    if (!container) return;
    container.innerHTML = list.map(artist => `
      <div class="artist-card" data-artist-id="${artist.id}">
        <div class="artist-avatar" style="background: ${getGradient(artist.id)};">
          <i class="fas ${artist.icon}"></i>
          <div class="artist-play-overlay"><i class="fas fa-play"></i></div>
        </div>
        <div class="artist-name">${artist.name}</div>
        <div class="artist-genre"><i class="fas fa-circle"></i> ${artist.genre}</div>
        <div class="artist-followers"><i class="fas fa-user"></i> ${artist.followers}</div>
      </div>
    `).join('');
  }

  function renderPlaylists(container, list = playlists) {
    if (!container) return;
    container.innerHTML = list.map(pl => `
      <div class="playlist-card" data-playlist-id="${pl.id}">
        <div class="playlist-cover-img" style="background: ${getGradient(pl.grad)};">
          <i class="fas ${pl.icon}"></i>
          <div class="playlist-play"><i class="fas fa-play"></i></div>
        </div>
        <h4>${pl.title}</h4>
        <p>${pl.count} músicas · ${pl.desc}</p>
      </div>
    `).join('');
  }

  function renderTrackList(container, trackIds) {
    if (!container) return;
    if (!trackIds || trackIds.length === 0) {
      container.innerHTML = `<div class="empty-state"><i class="fas fa-music"></i><h3>Nenhuma música</h3><p>Adicione músicas para começar</p></div>`;
      return;
    }
    container.innerHTML = trackIds.map((id, i) => {
      const track = findTrack(id);
      if (!track) return '';
      return `
        <div class="track-item ${state.currentTrack?.id === track.id ? 'playing' : ''}" data-track-id="${track.id}" style="padding: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.03);">
          <span class="track-number">${i + 1}</span>
          <div class="track-cover" style="background: ${getGradient(track.id)};">
            <i class="fas fa-music"></i>
          </div>
          <div class="track-info">
            <h4>${track.title}</h4>
            <p>${track.artist} · ${track.album || 'Single'}</p>
          </div>
          <span class="track-duration">${track.duration}</span>
          <div class="track-actions">
            <button class="track-action-btn ${state.likedTracks.has(track.id) ? 'liked' : ''}" data-like="${track.id}">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderLiked() {
    const ids = Array.from(state.likedTracks);
    $('#likedCount').textContent = ids.length;
    renderTrackList($('#likedList'), ids);
  }

  function renderCharts() {
    const chartIds = [1, 2, 5, 7, 8, 9, 12, 6, 3, 4, 11, 13, 14, 15, 10];
    renderTrackList($('#chartsList'), chartIds);
  }

  function renderNewReleases() {
    const grid = $('#newReleases');
    if (!grid) return;
    grid.innerHTML = newReleases.map(t => `
      <div class="artist-card" data-track-id="${t.id}">
        <div class="artist-avatar" style="background: ${getGradient(t.id)};">
          <i class="fas fa-music"></i>
          <div class="artist-play-overlay"><i class="fas fa-play"></i></div>
        </div>
        <div class="artist-name">${t.title}</div>
        <div class="artist-genre"><i class="fas fa-circle"></i> ${t.artist}</div>
      </div>
    `).join('');
  }

  function renderNewAlbums() {
    const grid = $('#newAlbums');
    if (!grid) return;
    const albums = [
      { title: 'Midnight Echoes', artist: 'Luna Wave', grad: 0, icon: 'fa-moon' },
      { title: 'Cosmic', artist: 'Astral Bloom', grad: 1, icon: 'fa-star' },
      { title: 'Origami', artist: 'Yumi & The Lights', grad: 2, icon: 'fa-feather' },
      { title: 'Fractured', artist: 'Velvet Dusk', grad: 3, icon: 'fa-heart-crack' }
    ];
    grid.innerHTML = albums.map(a => `
      <div class="playlist-card">
        <div class="playlist-cover-img" style="background: ${getGradient(a.grad)};">
          <i class="fas ${a.icon}"></i>
        </div>
        <h4>${a.title}</h4>
        <p>${a.artist} · Álbum</p>
      </div>
    `).join('');
  }

  function renderLibrary() {
    renderPlaylists($('#libraryGrid'), playlists.slice(0, 8));
  }

  function renderExplore() {
    let filtered = playlists;
    if (state.currentGenre !== 'all') {
      const genreMap = { pop: 'party', electronic: 'electronic', indie: 'indie', rnb: 'rnb', rock: 'rock', hiphop: 'party' };
      filtered = playlists.filter(p => p.id === genreMap[state.currentGenre] || p.id === 'discover' || p.id === 'trending');
      if (filtered.length === 0) filtered = playlists;
    }
    renderPlaylists($('#explorePlaylists'), filtered);
  }

  // ============ PLAYER LOGIC ============
  function playTrack(trackId, queueIds = null) {
    const track = findTrack(trackId);
    if (!track) return;

    state.currentTrack = track;
    state.currentTime = 0;
    state.isPlaying = true;

    if (queueIds) {
      state.queue = queueIds;
      state.queueIndex = queueIds.indexOf(trackId);
    } else if (!state.queue.includes(trackId)) {
      state.queue = [trackId];
      state.queueIndex = 0;
    }

    updatePlayerUI();
    startProgress();
    updateAllTrackHighlights();
    showToast('Reproduzindo', `${track.title} · ${track.artist}`, 'fa-play');
  }

  function updatePlayerUI() {
    const track = state.currentTrack;
    if (!track) return;

    $('#playerTitle').textContent = track.title;
    $('#playerArtist').textContent = track.artist;
    $('#playerCover').style.background = getGradient(track.id);
    $('#playerCover').innerHTML = '<i class="fas fa-music"></i>';
    $('#totalTime').textContent = track.duration;
    $('#currentTime').textContent = '0:00';
    $('#progressFill').style.width = '0%';

    const mainBtn = $('#mainPlayBtn');
    if (state.isPlaying) {
      mainBtn.innerHTML = '<i class="fas fa-pause"></i>';
      $('#playerCover').classList.add('spinning');
    } else {
      mainBtn.innerHTML = '<i class="fas fa-play"></i>';
      $('#playerCover').classList.remove('spinning');
    }

    const likeBtn = $('#playerLike');
    if (state.likedTracks.has(track.id)) {
      likeBtn.classList.add('liked');
      likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
      likeBtn.classList.remove('liked');
      likeBtn.innerHTML = '<i class="far fa-heart"></i>';
    }
  }

  function updateAllTrackHighlights() {
    $$('.track-item').forEach(item => {
      if (Number(item.dataset.trackId) === state.currentTrack?.id) {
        item.classList.add('playing');
      } else {
        item.classList.remove('playing');
      }
    });
  }

  function startProgress() {
    if (state.progressInterval) clearInterval(state.progressInterval);
    const track = state.currentTrack;
    if (!track) return;

    state.progressInterval = setInterval(() => {
      if (!state.isPlaying) return;
      state.currentTime += 1;
      if (state.currentTime >= track.dur) {
        state.currentTime = 0;
        if (state.repeat) {
          updateProgressUI();
        } else {
          nextTrack();
        }
        return;
      }
      updateProgressUI();
    }, 1000);
  }

  function updateProgressUI() {
    const track = state.currentTrack;
    if (!track) return;
    const pct = (state.currentTime / track.dur) * 100;
    $('#progressFill').style.width = pct + '%';
    $('#currentTime').textContent = formatTime(state.currentTime);
  }

  function togglePlay() {
    if (!state.currentTrack) {
      playTrack(1, tracks.map(t => t.id));
      return;
    }
    state.isPlaying = !state.isPlaying;
    updatePlayerUI();
    if (state.isPlaying) startProgress();
  }

  function nextTrack() {
    if (state.queue.length === 0) return;
    if (state.shuffle) {
      state.queueIndex = Math.floor(Math.random() * state.queue.length);
    } else {
      state.queueIndex = (state.queueIndex + 1) % state.queue.length;
    }
    const nextId = state.queue[state.queueIndex];
    state.currentTime = 0;
    playTrack(nextId, state.queue);
  }

  function prevTrack() {
    if (state.queue.length === 0) return;
    state.queueIndex = (state.queueIndex - 1 + state.queue.length) % state.queue.length;
    const prevId = state.queue[state.queueIndex];
    state.currentTime = 0;
    playTrack(prevId, state.queue);
  }

  function toggleLike(trackId) {
    if (state.likedTracks.has(trackId)) {
      state.likedTracks.delete(trackId);
      showToast('Removido', 'Música removida das curtidas', 'fa-heart-broken');
    } else {
      state.likedTracks.add(trackId);
      showToast('Curtida', 'Música adicionada às curtidas', 'fa-heart');
    }
    refreshLikeButtons();
    if (state.currentPage === 'liked') renderLiked();
    if (state.currentTrack?.id === trackId) updatePlayerUI();
  }

  function refreshLikeButtons() {
    $$('[data-like]').forEach(btn => {
      const id = Number(btn.dataset.like);
      if (state.likedTracks.has(id)) {
        btn.classList.add('liked');
        btn.innerHTML = '<i class="fas fa-heart"></i>';
      } else {
        btn.classList.remove('liked');
        btn.innerHTML = '<i class="far fa-heart"></i>';
      }
    });
  }

  // ============ NAVIGATION ============
  function navigateTo(page) {
    $$('.page').forEach(p => p.classList.remove('active'));
    const target = $(`#page-${page}`);
    if (target) target.classList.add('active');

    $$('.nav-item').forEach(n => n.classList.remove('active'));
    const navItem = $(`.nav-item[data-page="${page}"]`);
    if (navItem) navItem.classList.add('active');

    state.currentPage = page;

    // Update history
    if (state.pageHistory[state.historyIndex] !== page) {
      state.pageHistory = state.pageHistory.slice(0, state.historyIndex + 1);
      state.pageHistory.push(page);
      state.historyIndex = state.pageHistory.length - 1;
    }

    // Render page-specific content
    if (page === 'liked') renderLiked();
    if (page === 'charts') renderCharts();
    if (page === 'library') renderLibrary();
    if (page === 'explore') renderExplore();
    if (page === 'new') { renderNewReleases(); renderNewAlbums(); }
    if (page === 'artists') renderArtists($('#artistsFullGrid'));

    window.scrollTo({ top: 0, behavior: 'smooth' });
    $('#sidebar').classList.remove('open');
  }

  function openPlaylist(playlistId) {
    const pl = playlists.find(p => p.id === playlistId);
    if (!pl) return;

    const hero = $('#playlistHero');
    hero.innerHTML = `
      <div class="playlist-hero-cover" style="background: ${getGradient(pl.grad)};">
        <i class="fas ${pl.icon}"></i>
      </div>
      <div class="playlist-hero-info">
        <div class="label">Playlist</div>
        <h1>${pl.title}</h1>
        <div class="meta">${pl.desc} · <strong>${pl.count} músicas</strong></div>
        <div class="playlist-actions">
          <button class="play-btn" id="playPlaylistBtn" style="width:54px;height:54px;font-size:1.3rem;"><i class="fas fa-play"></i></button>
          <button class="btn-secondary"><i class="fas fa-shuffle"></i> Aleatório</button>
          <button class="btn-secondary"><i class="fas fa-plus"></i> Adicionar</button>
        </div>
      </div>
    `;

    renderTrackList($('#playlistTracks'), pl.tracks);

    $$('.page').forEach(p => p.classList.remove('active'));
    $('#page-playlist').classList.add('active');
    state.currentPage = 'playlist';

    if (state.pageHistory[state.historyIndex] !== 'playlist') {
      state.pageHistory = state.pageHistory.slice(0, state.historyIndex + 1);
      state.pageHistory.push('playlist');
      state.historyIndex = state.pageHistory.length - 1;
    }

    const playBtn = $('#playPlaylistBtn');
    if (playBtn) {
      playBtn.onclick = () => {
        playTrack(pl.tracks[0], pl.tracks);
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
      };
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ============ MODAL ============
  function openArtistModal(artistId) {
    const artist = artists.find(a => a.id === artistId);
    if (!artist) return;

    const artistTracks = tracks.filter(t => t.artist === artist.name);
    const displayTracks = artistTracks.length > 0 ? artistTracks : tracks.slice(0, 4);

    const modal = $('#modalContent');
    modal.innerHTML = `
      <button class="modal-close" id="modalClose"><i class="fas fa-times"></i></button>
      <div class="modal-header">
        <div class="modal-avatar" style="background: ${getGradient(artist.id)};">
          <i class="fas ${artist.icon}"></i>
        </div>
        <div class="modal-header-info">
          <h2>${artist.name}</h2>
          <p>${artist.genre}</p>
          <div class="modal-stats">
            <div><strong>${artist.followers}</strong>Seguidores</div>
            <div><strong>${artist.tracks}</strong>Músicas</div>
          </div>
        </div>
      </div>
      <div class="modal-actions">
        <button class="play-btn" id="modalPlay" style="width:54px;height:54px;font-size:1.2rem;"><i class="fas fa-play"></i></button>
        <button class="btn-secondary"><i class="fas fa-user-plus"></i> Seguir</button>
        <button class="btn-secondary"><i class="fas fa-shuffle"></i> Aleatório</button>
      </div>
      <h3 class="modal-section-title"><i class="fas fa-fire"></i> Populares</h3>
      <div id="modalTracks"></div>
    `;

    renderTrackList($('#modalTracks'), displayTracks.map(t => t.id));

    $('#modalClose').onclick = closeModal;
    $('#modalPlay').onclick = () => {
      playTrack(displayTracks[0].id, displayTracks.map(t => t.id));
      closeModal();
    };

    $('#modalOverlay').classList.add('active');
  }

  function closeModal() {
    $('#modalOverlay').classList.remove('active');
  }

  // ============ EVENTS ============
  function bindEvents() {
    // Navigation
    $$('[data-page]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(el.dataset.page);
      });
    });

    // Sidebar playlists
    $$('[data-playlist]').forEach(el => {
      el.addEventListener('click', () => openPlaylist(el.dataset.playlist));
    });

    // Featured play
    $('#featuredPlay').addEventListener('click', () => {
      playTrack(1, [1, 2, 3, 4, 5]);
      $('#featuredPlay').classList.add('playing');
    });

    // Featured like
    $('#featuredLike').addEventListener('click', function() {
      toggleLike(1);
      this.classList.toggle('active');
      const isLiked = this.classList.contains('active');
      this.innerHTML = isLiked ? '<i class="fas fa-heart"></i> Curtido' : '<i class="far fa-heart"></i> Curtir';
    });

    // Player controls
    $('#mainPlayBtn').addEventListener('click', togglePlay);
    $('#nextBtn').addEventListener('click', nextTrack);
    $('#prevBtn').addEventListener('click', prevTrack);

    $('#shuffleBtn').addEventListener('click', function() {
      state.shuffle = !state.shuffle;
      this.classList.toggle('active', state.shuffle);
      showToast('Aleatório', state.shuffle ? 'Modo aleatório ativado' : 'Modo aleatório desativado', 'fa-shuffle');
    });

    $('#repeatBtn').addEventListener('click', function() {
      state.repeat = !state.repeat;
      this.classList.toggle('active', state.repeat);
      showToast('Repetir', state.repeat ? 'Repetição ativada' : 'Repetição desativada', 'fa-repeat');
    });

    $('#playerLike').addEventListener('click', () => {
      if (state.currentTrack) toggleLike(state.currentTrack.id);
    });

    // Progress bar click
    $('#progressBar').addEventListener('click', function(e) {
      if (!state.currentTrack) return;
      const rect = this.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      state.currentTime = Math.floor(pct * state.currentTrack.dur);
      updateProgressUI();
    });

    // Volume
    $('#volumeSlider').addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      state.volume = pct;
      $('#volumeFill').style.width = pct + '%';
    });

    // Search
    $('#searchInput').addEventListener('input', function(e) {
      const term = e.target.value.toLowerCase().trim();
      state.searchTerm = term;

      if (!term) {
        // Reset all views
        renderTrending();
        renderArtists($('#artistsHomeGrid'));
        renderArtists($('#artistsFullGrid'));
        renderPlaylists($('#playlistsHomeGrid'));
        renderPlaylists($('#explorePlaylists'));
        renderPlaylists($('#libraryGrid'));
        return;
      }

      // Filter artists
      const filteredArtists = artists.filter(a =>
        a.name.toLowerCase().includes(term) || a.genre.toLowerCase().includes(term)
      );
      renderArtists($('#artistsHomeGrid'), filteredArtists);
      renderArtists($('#artistsFullGrid'), filteredArtists);

      // Filter playlists
      const filteredPlaylists = playlists.filter(p =>
        p.title.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term)
      );
      renderPlaylists($('#playlistsHomeGrid'), filteredPlaylists);
      renderPlaylists($('#explorePlaylists'), filteredPlaylists);
      renderPlaylists($('#libraryGrid'), filteredPlaylists);

      // Filter trending
      const filteredTracks = tracks.filter(t =>
        t.title.toLowerCase().includes(term) || t.artist.toLowerCase().includes(term)
      );
      const list = $('#trendingList');
      if (filteredTracks.length === 0) {
        list.innerHTML = `<div class="empty-state" style="padding:2rem;"><i class="fas fa-search"></i><h3>Sem resultados</h3><p>Nada encontrado para "${e.target.value}"</p></div>`;
      } else {
        list.innerHTML = filteredTracks.slice(0, 6).map((track, i) => `
          <div class="track-item" data-track-id="${track.id}">
            <span class="track-number">${i + 1}</span>
            <div class="track-cover" style="background: ${getGradient(track.id)};"><i class="fas fa-music"></i></div>
            <div class="track-info"><h4>${track.title}</h4><p>${track.artist}</p></div>
            <span class="track-duration">${track.duration}</span>
          </div>
        `).join('');
      }
    });

    // Genre filters
    $$('.filter-chip').forEach(chip => {
      chip.addEventListener('click', function() {
        $$('.filter-chip').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        state.currentGenre = this.dataset.genre;
        renderExplore();
      });
    });

    // Delegated events for tracks and cards
    document.addEventListener('click', (e) => {
      // Track click
      const trackItem = e.target.closest('.track-item[data-track-id]');
      if (trackItem && !e.target.closest('.track-action-btn')) {
        const id = Number(trackItem.dataset.trackId);
        const siblingTracks = Array.from(trackItem.parentElement.querySelectorAll('[data-track-id]')).map(el => Number(el.dataset.trackId));
        playTrack(id, siblingTracks);
        return;
      }

      // Like button
      const likeBtn = e.target.closest('[data-like]');
      if (likeBtn) {
        e.stopPropagation();
        toggleLike(Number(likeBtn.dataset.like));
        return;
      }

      // Add button
      const addBtn = e.target.closest('[data-add]');
      if (addBtn) {
        e.stopPropagation();
        showToast('Adicionado', 'Música adicionada à sua playlist', 'fa-plus');
        return;
      }

      // Artist card
      const artistCard = e.target.closest('.artist-card[data-artist-id]');
      if (artistCard) {
        openArtistModal(Number(artistCard.dataset.artistId));
        return;
      }

      // Playlist card
      const plCard = e.target.closest('.playlist-card[data-playlist-id]');
      if (plCard) {
        openPlaylist(plCard.dataset.playlistId);
        return;
      }

      // New release track card
      const newReleaseCard = e.target.closest('.artist-card[data-track-id]');
      if (newReleaseCard) {
        playTrack(Number(newReleaseCard.dataset.trackId), [Number(newReleaseCard.dataset.trackId)]);
        return;
      }
    });

    // Modal close
    $('#modalOverlay').addEventListener('click', (e) => {
      if (e.target.id === 'modalOverlay') closeModal();
    });

    // Nav arrows
    $('#navBack').addEventListener('click', () => {
      if (state.historyIndex > 0) {
        state.historyIndex--;
        const page = state.pageHistory[state.historyIndex];
        if (page === 'playlist') {
          // Go back to home
          navigateTo('home');
        } else {
          // Prevent duplicate history push
          const prevHistory = [...state.pageHistory];
          const prevIndex = state.historyIndex;
          $$('.page').forEach(p => p.classList.remove('active'));
          $(`#page-${page}`)?.classList.add('active');
          state.currentPage = page;
          state.pageHistory = prevHistory;
          state.historyIndex = prevIndex;
        }
      }
    });

    $('#navForward').addEventListener('click', () => {
      if (state.historyIndex < state.pageHistory.length - 1) {
        state.historyIndex++;
        const page = state.pageHistory[state.historyIndex];
        $$('.page').forEach(p => p.classList.remove('active'));
        $(`#page-${page}`)?.classList.add('active');
        state.currentPage = page;
      }
    });

    // Notifications
    $('#notifBtn').addEventListener('click', () => {
      showToast('Notificações', 'Você tem 3 novas notificações', 'fa-bell');
      $('#notifBtn .badge')?.remove();
    });

    // Settings
    $('#settingsBtn').addEventListener('click', () => {
      showToast('Configurações', 'Em breve novas opções', 'fa-gear');
    });

    // Play liked
    $('#playLikedBtn').addEventListener('click', () => {
      const ids = Array.from(state.likedTracks);
      if (ids.length > 0) playTrack(ids[0], ids);
    });

    // Play charts
    $('#playChartsBtn')?.addEventListener('click', () => {
      playTrack(1, [1, 2, 5, 7, 8, 9, 12, 6, 3, 4]);
    });

    // Menu toggle
    $('#menuToggle').addEventListener('click', () => {
      $('#sidebar').classList.toggle('open');
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
      if (e.code === 'ArrowRight' && e.shiftKey) { e.preventDefault(); nextTrack(); }
      if (e.code === 'ArrowLeft' && e.shiftKey) { e.preventDefault(); prevTrack(); }
      if (e.key === 'Escape') closeModal();
    });

    // Lyrics button
    $('#lyricsBtn').addEventListener('click', function() {
      if (!state.currentTrack) { showToast('Sem música', 'Selecione uma música primeiro', 'fa-info'); return; }
      const modal = $('#modalContent');
      modal.innerHTML = `
        <button class="modal-close" onclick="document.getElementById('modalOverlay').classList.remove('active')"><i class="fas fa-times"></i></button>
        <div class="modal-header">
          <div class="modal-avatar" style="background: ${getGradient(state.currentTrack.id)};">
            <i class="fas fa-music"></i>
          </div>
          <div class="modal-header-info">
            <h2>${state.currentTrack.title}</h2>
            <p>${state.currentTrack.artist} · ${state.currentTrack.album || 'Single'}</p>
          </div>
        </div>
        <h3 class="modal-section-title"><i class="fas fa-microphone"></i> Letra</h3>
        <div class="lyrics-container">
          [Verso 1]<br>
          Caminhando pelas ruas da cidade<br>
          Luzes neon refletem minha alma<br>
          Procurando por algo que não sei<br>
          Mas a música me mantém calmo<br><br>
          [Refrão]<br>
          Midnight echoes calling out my name<br>
          Dancing shadows, we're not the same<br>
          Lost in rhythm, lost in time<br>
          This melody is yours and mine<br><br>
          [Verso 2]<br>
          O silêncio da noite me envolve<br>
          Cada nota é uma nova história<br>
          Os sonhos que guardei na memória<br>
          Se tornam música, se tornam glória
        </div>
      `;
      $('#modalOverlay').classList.add('active');
    });
  }

  // ============ INIT ============
  function init() {
    renderTrending();
    renderArtists($('#artistsHomeGrid'));
    renderPlaylists($('#playlistsHomeGrid'));
    renderPlaylists($('#libraryGrid'));
    renderPlaylists($('#explorePlaylists'));
    renderArtists($('#artistsFullGrid'));
    bindEvents();
    refreshLikeButtons();
    $('#volumeFill').style.width = state.volume + '%';
    setTimeout(() => {
      showToast('Bem-vindo!', 'Explore a nova cena musical', 'fa-headphones');
    }, 800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
