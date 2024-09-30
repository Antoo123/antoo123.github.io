document.addEventListener('DOMContentLoaded', () => {
    // Ensure the DOM is fully loaded before running scripts
    init();
  });
  
  function init() {
    // Initialize game variables
    var currentWordIndex = 0;
    var words = [
      "CVC-код", "Аванс", "Аверс", "Акциз", "Акция", "Аналитик", "Аренда", 
      "Аудит", "Аукцион", "Аутентификация", "Афера", "Банк", "Банкир", 
      "Банкомат", "Банкротство", "Бартер", "Безопасность", "Безработица", 
      "Бизнес", "Биометрия", "Биржа", "Биткойн", "Блокчейн", "Брокер", 
      "Бюджет", "Валюта", "Верификация", "Взятка", "Взяточничество", 
      "Вирус", "Вишинг", "Вклад", "Выручка", "Гарантия", "Государство", 
      "Грант", "Даркнет", "Демпинг", "Депозит", "Дефицит", "Дефляция", 
      "Диверсификация", "Дивиденд", "Дисконтирование", "Доверенность", 
      "Договор", "Доксинг", "Документ", "Долг", "Доход", "Дроппер", 
      "Закон", "Залог", "Запас", "Зарплата", "Золото", "Идентификация", 
      "Импорт", "Имущество", "Инвентаризация", "Инвестиции", "Инкассация", 
      "Интерпол", "Инфляция", "Информация", "Казначейство", "Капитал", 
      "Кардинг", "Карта", "Квитанция", "Кибератака", "Кибербезопасность", 
      "Киберпреступник", "Кликфорд", "Кодекс", "Коллектор", "Комиссия", 
      "Конвертация", "Конкуренция", "Контрабанда", "Конфискация", 
      "Конфликт", "Коррупция", "Кошелек", "Кредит", "Кризис", 
      "Криминалистика", "Курс", "Кэшбек", "Легализация (Отмывание)", 
      "Лизинг", "Ликвидность", "Лимит", "Лицензия", "Ломбард", 
      "Маржа", "Маркетплейс", "Монета", "Мониторинг", "Монополия", 
      "Мошенничество", "Надзор", "Налог", "Наркоторговец", "Нелегал", 
      "Нерезидент", "Облигация", "Обязательство", "Овердрафт", 
      "Олигополия", "Опасность", "Ответчик", "Отчетность", "Пенсия", 
      "Пеня", "Пин-код", "Платежеспособность", "ПОД/ФТ", "Подделка", 
      "Подлог", "Подстрекатель", "Покупка", "Пособие", "Правонарушение", 
      "Предложение", "Президент", "Премия", "Преступление", "Приговор", 
      "Проверка", "Прогноз", "Продажа", "Прокуратура", "Профицит", 
      "Процент", "ПФР", "Рассрочка", "Реверс", "Резидент", "Реквизиты", 
      "Рента", "Рентабельность", "Риск", "Роскомнадзор", "Росстат", 
      "Росфинмониторинг", "Рынок", "Санкции", "Сбережения", "Сбор", 
      "Сделка", "Скимминг", "Смишинг", "Спад", "Статистика", 
      "Стипендия", "Стоимость", "Стратегия", "Страховка", "Субсидия", 
      "Счет", "Терминал", "Терроризм", "Товар", "Торговля", 
      "Траппинг", "Ущерб", "Фарминг", "ФАТФ", "Финансы", 
      "Фирма-«однодневка»", "Фишинг", "Фонд", "Форекс", "Франшиза", 
      "ФРОМУ", "Хакер", "Халатность", "Хеджирование", "Хищение", 
      "Цена", "Цифровизация", "Чек", "Штраф", "Экономика", 
      "Экономист", "Экспорт", "Эмиссия"]
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
        titleElement.textContent = 'Исходный код';
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
            <label for="game-mode">Режим игры:</label>
            <select id="game-mode">
              <option value="default">Использовать словарь</option>
              <option value="custom">Ввести свои слова</option>
            </select>
          </div>
          <div id="custom-words" style="display:none;">
            <label for="user-words">Введите слова (через запятую):</label>
            <textarea id="user-words"></textarea>
          </div>
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
  
      // Show custom words input if "custom" mode is selected
      document.getElementById('game-mode').addEventListener('change', function() {
        if (this.value === 'custom') {
          document.getElementById('custom-words').style.display = 'block';
        } else {
          document.getElementById('custom-words').style.display = 'none';
        }
      });
  }
  
  function startNewGame() {
    const gameMode = document.getElementById('game-mode').value;

    if (gameMode === 'custom') {
        const userWordsInput = document.getElementById('user-words').value;
        if (userWordsInput.trim()) {
            words = userWordsInput.split(',').map(word => word.trim());
        } else {
            alert("Введите хотя бы одно слово для начала игры.");
            return;
        }
    } else {
        // Используем словарь по умолчанию
        words = words;
    }

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
          // Увеличиваем индекс текущего слова
          teams[teamNames[currentTeamIndex]]++;
          
          // Удаляем текущее слово из списка words
          words.splice(currentWordIndex, 1);
          
          // Проверяем, есть ли еще слова в списке
          if (words.length > 0) {
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
          // Увеличиваем индекс текущего слова
          currentWordIndex++;
      
          // Удаляем текущее слово из списка words
          words.splice(currentWordIndex - 1, 1); // Удаляем предыдущее слово
      
          if (words.length > 0) {
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
        // Увеличиваем индекс команды
        currentTeamIndex++;
    
        // Проверяем, есть ли следующая команда
        if (currentTeamIndex >= teamNames.length) {
            showResults(); // Если команды закончились, показываем результаты
            return;
        }
    
        // Получаем название следующей команды
        const nextTeamName = teamNames[currentTeamIndex];
    
        const nextTeamMessage = document.createElement('div');
        nextTeamMessage.textContent = `Следующая команда: ${nextTeamName} нажмите для продолжения`; 
    
        nextTeamMessage.style.fontSize = '36px';
        nextTeamMessage.style.color = 'white';
        nextTeamMessage.style.textAlign = 'center';
        nextTeamMessage.style.position = 'fixed';
        nextTeamMessage.style.top = '50%';
        nextTeamMessage.style.left = '50%';
        nextTeamMessage.style.transform = 'translate(-50%, -50%)';
        nextTeamMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Полупрозрачный черный фон
        nextTeamMessage.style.padding = '20px';
        nextTeamMessage.style.borderRadius = '10px';
        nextTeamMessage.style.zIndex = '1000'; // Отображать поверх других элементов
        nextTeamMessage.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)'; // Тень для глубины
        nextTeamMessage.style.opacity = '0'; // Начальная прозрачность для анимации
        nextTeamMessage.style.transition = 'opacity 0.5s ease-in-out'; // Плавное изменение прозрачности
    
        // Добавляем элемент в документ
        document.body.appendChild(nextTeamMessage);
    
        // Запускаем анимацию появления
        setTimeout(() => {
            nextTeamMessage.style.opacity = '1'; // Увеличиваем непрозрачность
        }, 10); // Небольшая задержка для запуска анимации
    
        function handleScreenClick() {
            nextTeamMessage.style.opacity = '0';
    
            setTimeout(() => {
                nextTeamMessage.remove(); 
            }, 500); 
    
            
            currentWordIndex = 0;
            showGameScreen();
    
            
            document.removeEventListener('click', handleScreenClick);
        }
    
        
        document.addEventListener('click', handleScreenClick);
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