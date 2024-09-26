document.addEventListener('DOMContentLoaded', () => {
    // Ensure the DOM is fully loaded before running scripts
    init();
  });
  
  function init() {
    // Initialize game variables
    var currentWordIndex = 0;
    var words = [
      "дом", "стол", "книга", "машина", "дерево", "человек", "кошка", "собака",
      "птица", "стул", "яблоко", "солнце", "парк", "море", "планета", "река",
      "горы", "кофе", "чай", "телефон", "камень", "компьютер", "телевизор",
      "шкаф", "полка", "дверь", "окно", "мост", "здание", "день", "ночь",
      "время", "песня", "фильм", "журнал", "газета", "молоко", "хлеб", "творог",
      "вода", "сок", "пирог", "мясо", "рыба", "овощи", "фрукты", "бутерброд",
      "суп", "паста", "деньги", "монета", "билет", "пакет", "сумка", "рюкзак",
      "письмо", "подарок", "игра", "игрушка", "зонт", "перчатки", "шляпа",
      "шарф", "сапоги", "ботинки", "пальто", "куртка", "дождь", "снег", "ветер",
      "туман", "снегопад", "дождевик", "очки", "мир", "вселенная", "звезда",
      "галактика", "комета", "медаль", "кубок", "награда", "трофей", "плакат",
      "картина", "фотография", "коллекция", "модель", "вокзал", "аэропорт",
      "площадь", "улица", "переулок", "пляж", "набережная", "кафе", "ресторан",
      "магазин", "библиотека", "музей", "театр", "кинотеатр", "клуб",
      "спортивный зал", "дворец", "зоопарк", "аквариум", "ферма", "школа",
      "университет", "колледж", "гимназия", "детский сад", "завод", "фабрика",
      "офис", "строительство", "порт", "платформа", "станция", "автобус",
      "поезд", "самолет", "велосипед", "скейтборд", "самокат", "ролики",
      "дорога", "заправка", "гараж", "парковка", "трасса", "пункт",
      "дорожный знак", "педаль", "руль", "ключ", "замок", "кнопка", "провод",
      "зарядное устройство", "пульт", "кабель", "разъем", "душ", "ванна",
      "раковина", "кран", "тумбочка", "зеркало", "полотенце", "тапочки", "мыло",
      "шампунь", "косметика", "зубная щетка", "зубная паста", "расческа",
      "парфюм", "крем", "фен", "отель", "гостиница", "хостел", "кемпинг",
      "домик", "гостевой дом", "шале", "площадка", "бассейн", "сауна",
      "фитнес", "спа", "антибиотики", "витамины", "пластырь", "медицинский кабинет",
      "врач", "медсестра", "больница", "аптека", "консультант", "специалист",
      "эксперт", "менеджер", "директор", "предприниматель", "работник",
      "служащий", "студент", "ученик", "проект", "задача", "план", "стратегия",
      "цель", "результат", "анализ", "отчет", "исследование", "тест",
      "проектор", "экран", "печатная машинка", "копир", "факс", "бумага",
      "чернила", "маркер", "ручка", "карандаш", "степлер", "скрепки", "клей",
      "коробка", "папка", "тетрадь", "дневник", "алфавит", "словарь",
      "грамматика", "история", "физика", "математика", "химия", "биология",
      "география", "экономика", "политика", "искусство", "музыка",
      "художественный фильм", "драма", "комедия", "мюзикл", "документальный фильм",
      "аниме", "сериал", "ток-шоу", "интервью", "дебаты", "выставка",
      "конференция", "фестиваль", "конкурс", "премия", "церемония", "вечеринка",
      "банкет", "завтрак", "обед", "ужин", "перекус", "праздник", "юбилей",
      "день рождения", "свадьба", "крещение", "отпуск", "путешествие",
      "экскурсия", "поход", "пикник", "отдых", "плавание", "тренировка", "йога",
      "техник", "системный администратор", "программист", "дизайнер", "технолог",
      "инженер", "архитектор", "конструктор", "механик", "бухгалтер", "экономист",
      "финансист", "маркетолог", "PR-менеджер", "тренер", "психолог", "социолог",
      "журналист", "редактор", "корреспондент", "фотограф", "оператор", "режиссер",
      "актёр", "музыкант", "сценарист", "стол", "кресло", "диван", "телевизор",
      "холодильник", "плита", "микроволновка", "чайник", "термос", "кастрюля",
      "сковорода", "палатка", "мягкая игрушка", "декор", "скульптура", "вазон",
      "горшок", "плед", "покрывало", "карниз", "занавес", "фоторамка", "подушка",
      "матрас", "коврик", "прачечная", "сушилка", "шкафчик", "гладильная доска",
      "пылесос", "тряпка", "веник", "швабра", "отрасль", "сфера", "профессия",
      "квалификация", "перспектива", "идея", "мысль", "потребность", "запрос",
      "рынок", "тренд", "технология", "метод", "прием", "резерв", "реализация",
      "комплекс", "механизм", "принцип", "функция", "формула", "методика",
      "обработка", "диагностика", "оценка", "критерий", "моделирование", "прогноз",
      "реакция", "влияние", "воздействие", "параметр", "фактор", "условие",
      "объект", "субъект", "компонент", "производственный процесс", "продукт",
      "услуга", "проект", "платформа", "система", "инструмент", "разработка",
      "тестирование", "имплементация", "внедрение", "поток", "парадигма",
      "структура", "эксперимент", "управление", "стратегия", "достижение",
      "планирование", "концепция", "технологический процесс", "этап", "фаза",
      "подсистема", "отчетность", "сведение", "показатель", "объем",
      "производительность", "эффективность", "метод", "алгоритм", "модуль",
      "ресурс", "разработка", "инновация", "тестирование", "прогнозирование",
      "анализ", "управление", "влияние", "воздействие", "условие", "объект",
      "субъект", "компонент"
    ];
    var timer;
    var teams = {};
    var settings = { time: 60, words: 50 };
    var teamNames = [];
    var currentTeamIndex = 0;
  
    // Event Listeners
    window.startGame = startGame;
    window.showRules = showRules;
    window.goBack = goBack;
    window.addTeam = addTeam;
    window.toSettings = toSettings;
    window.startNewGame = startNewGame;
  
    // Game Functions
    function startGame() {
      clearTitleScreen();
      teamPage();
    }
  
    function clearTitleScreen() {
      const titleScreen = document.querySelector('.title');
      if (titleScreen) {
        titleScreen.remove();
      }
      // Clear any existing content in 'main-content'
      document.getElementById('main-content').innerHTML = '';
    }
  
    function showRules() {
      document.getElementById('main-content').innerHTML = `
        <div class="content">
          <h2>Правила:</h2>
          <ul class="rules-list">
            <li>1. Объясняйте слова, не используя однокоренные слова.</li>
            <li>2. За каждое отгаданное слово команда получает одно очко.</li>
            <li>3. Команда с наибольшим количеством очков выигрывает.</li>
          </ul>
          <button class="btn" onclick="goBack()">Назад</button>
        </div>
      `;
    }
  
    function goBack() {
      // Re-insert the title if it doesn't exist
      if (!document.querySelector('.title')) {
        const container = document.querySelector('.container');
        const titleElement = document.createElement('h1');
        titleElement.className = 'title';
        titleElement.textContent = 'Alias';
        container.insertBefore(titleElement, container.firstChild);
      }
      document.getElementById('main-content').innerHTML = `
        <button class="btn" onclick="startGame()">Начать</button>
        <button class="btn" onclick="showRules()">Правила</button>
      `;
    }
  
    function teamPage() {
      document.getElementById('main-content').innerHTML = `
        <h2>Команды</h2>
        <div id='team-content'>
          <div class="team">
            <input type="text" placeholder="Введите название команды" />
          </div>
        </div>
        <button class="btn" onclick="addTeam()">Добавить команду</button>
        <button class="btn" onclick="toSettings()">Продолжить</button>
      `;
    }
  
    function addTeam() {
      const teamContent = document.getElementById('team-content');
      if (teamContent.children.length < 5) {
        // Limit to 5 teams
        teamContent.insertAdjacentHTML('beforeend', `
          <div class="team">
            <input type="text" placeholder="Введите название команды" />
          </div>
        `);
      } else {
        alert('Максимум 5 команд');
      }
    }
  
    function saveTeams() {
      const inputs = document.querySelectorAll('#team-content input[type="text"]');
      teamNames = [];
      teams = {};
      inputs.forEach(input => {
        let teamName = input.value.trim();
        if (teamName) {
          teamNames.push(teamName);
          teams[teamName] = 0;
        }
      });
      if (teamNames.length === 0) {
        alert('Добавьте хотя бы одну команду.');
        return false;
      }
      return true;
    }
  
    function toSettings() {
      if (!saveTeams()) return;
      document.getElementById('main-content').innerHTML = `
        <h2>Настройки</h2>
        <div id='settings-content'>
          <div class="setting">
            <label for="words-range">Количество слов на раунд: <span id="words-value">${settings.words}</span></label>
            <input type="range" id="words-range" min="1" max="100" value="${settings.words}" />
          </div>
          <div class="setting">
            <label for="time-range">Время раунда (сек): <span id="time-value">${settings.time}</span></label>
            <input type="range" id="time-range" min="10" max="120" value="${settings.time}" />
          </div>
        </div>
        <button class="btn" onclick="startNewGame()">Начать игру</button>
      `;
      // Event listeners for settings
      document.getElementById('words-range').addEventListener('input', function() {
        settings.words = this.value;
        document.getElementById('words-value').textContent = settings.words;
      });
      document.getElementById('time-range').addEventListener('input', function() {
        settings.time = this.value;
        document.getElementById('time-value').textContent = settings.time;
      });
    }
  
    function startNewGame() {
      currentTeamIndex = 0;
      currentWordIndex = 0;
      showGameScreen();
    }
  
    function showGameScreen() {
      const currentTeam = teamNames[currentTeamIndex];
      document.getElementById('main-content').innerHTML = `
        <h2>Ход команды: ${currentTeam}</h2>
        <div id="game-container">
          <div id="swipe-left" class="swipe-zone"> <== Пропустить</div>
          <div id="swipe-area">
            <div id="current-word">${getRandomWord()}</div>
          </div>
          <div id="swipe-right" class="swipe-zone">Отгадано ==></div>
        </div>
        <div id="timer">Оставшееся время: <span id="timer-value">${settings.time}</span> сек</div>
      `;
      startTimer();
      setupSwipeDetection();
    }
  
    function getRandomWord() {
      const randomIndex = Math.floor(Math.random() * words.length);
      return words[randomIndex];
    }
  
    function startTimer() {
      let timeLeft = settings.time;
      timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-value').textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(timer);
          nextTeam();
        }
      }, 1000);
    }
  
    function setupSwipeDetection() {
        const swipeArea = document.getElementById('swipe-area');
        let touchstartX = 0;
        let swipeAreaWidth = swipeArea.offsetWidth;
        
        swipeArea.addEventListener('touchstart', (e) => {
          touchstartX = e.touches[0].clientX;
        });
        
        swipeArea.addEventListener('touchmove', (e) => {
          const touchMoveX = e.touches[0].clientX;
          const moveX = touchMoveX - touchstartX;
      
          // Get viewport width
          const viewportWidth = window.innerWidth;
      
          // Calculate the maximum translateX value to prevent going outside the viewport
          const maxTranslateX = (viewportWidth - swipeAreaWidth) / 2;
          const minTranslateX = -maxTranslateX;
      
          // Apply boundaries
          const newTranslateX = Math.max(minTranslateX, Math.min(maxTranslateX, moveX));
          
          swipeArea.style.transform = `translateX(${newTranslateX}px)`;
          swipeArea.classList.add('moving');
        });
        
        swipeArea.addEventListener('touchend', (e) => {
          const touchendX = e.changedTouches[0].clientX;
          const swipeDistance = touchendX - touchstartX;
          swipeArea.style.transform = 'translateX(0)';
          swipeArea.classList.remove('moving');
          
          if (Math.abs(swipeDistance) > 50) {
            if (swipeDistance > 0) {
              handleRightSwipe();
            } else {
              handleLeftSwipe();
            }
          }
        });
      }
  
      function handleRightSwipe() {
        animateSwipe('right');
        playSound('correct'); // Воспроизвести звук для правильного ответа
        setTimeout(() => {
          currentWordIndex++;
          teams[teamNames[currentTeamIndex]]++;
          if (currentWordIndex < settings.words) {
            document.getElementById('current-word').textContent = getRandomWord();
          } else {
            clearInterval(timer);
            nextTeam();
          }
        }, 300);
      }
      
      function handleLeftSwipe() {
        animateSwipe('left');
        playSound('incorrect'); // Воспроизвести звук для неправильного ответа
        setTimeout(() => {
          currentWordIndex++;
          if (currentWordIndex < settings.words) {
            document.getElementById('current-word').textContent = getRandomWord();
          } else {
            clearInterval(timer);
            nextTeam();
          }
        }, 300);
      }
      
      function animateSwipe(direction) {
        const swipeArea = document.getElementById('swipe-area');
        swipeArea.classList.add('moving');
        
        
        if (direction === 'left') {
          swipeArea.style.backgroundColor = 'red'; 
          swipeArea.style.transform = 'translateX(-100vw)';
        } else {
          swipeArea.style.backgroundColor = 'green'; 
          swipeArea.style.transform = 'translateX(100vw)';
        }
      
        setTimeout(() => {
          swipeArea.style.transition = 'none';
          swipeArea.style.transform = 'translateX(0)';
          swipeArea.offsetHeight; // Trigger reflow
      
          swipeArea.style.transition = 'transform 0.3s ease-in-out';
          swipeArea.classList.remove('moving');
      
          // Возвращаем исходный цвет фона
          swipeArea.style.backgroundColor = ''; 
        }, 300);
      }
      
      function playSound(type) {
        let sound;
        if (type === 'correct') {
          sound = document.getElementById('correct-sound');
        } else {
          sound = document.getElementById('incorrect-sound');
        }
        sound.play();
      }
    function nextTeam() {
      currentTeamIndex++;
      if (currentTeamIndex < teamNames.length) {
        currentWordIndex = 0;
        showGameScreen();
      } else {
        showResults();
      }
    }
  
    function showResults() {
      const sortedTeams = Object.entries(teams).sort((a, b) => b[1] - a[1]);
      let resultHtml = `
        <h2>Результаты игры</h2>
        <ul class="rules-list">
      `;
      sortedTeams.forEach(([team, score]) => {
        resultHtml += `<li>${team}: ${score} очков</li>`;
      });
      resultHtml += `
        </ul>
        <button class="btn" onclick="goBack()">Главное меню</button>
      `;
      document.getElementById('main-content').innerHTML = resultHtml;
    }
  }