document.addEventListener('DOMContentLoaded', () => {
    // Ensure the DOM is fully loaded before running scripts
    init();
});

function init() {
    // Initialize game variables
    var currentWordIndex = 0;
    var words =  [
        "дом", "стол", "книга", "машина", "дерево", "человек", "кошка", "собака", "птица", "стул",
        "яблоко", "солнце", "парк", "море", "планета", "река", "горы", "собака", "кофе", "чай",
        "телефон", "камень", "компьютер", "телевизор", "шкаф", "полка", "дверь", "окно", "мост", "здание",
        "день", "ночь", "время", "песня", "фильм", "журнал", "газета", "молоко", "хлеб", "творог",
        "вода", "сок", "пирог", "мясо", "рыба", "овощи", "фрукты", "бутерброд", "суп", "паста",
        "деньги", "монета", "билет", "пакет", "сумка", "рюкзак", "письмо", "подарок", "игра", "игрушка",
        "зонт", "перчатки", "шляпа", "шарф", "сапоги", "ботинки", "пальто", "куртка", "дождь", "снег",
        "ветер", "туман", "снегопад", "дождевик", "очк", "мир", "вселенная", "звезда", "галактика", "комета",
        "медаль", "кубок", "наград", "трофей", "плакаты", "картина", "фотография", "коллекция", "модели", "вокзал",
        "аэропорт", "площадь", "улица", "переулок", "парк", "пляж", "набережная", "кафе", "ресторан", "магазин",
        "библиотека", "музей", "театр", "кинозал", "клуб", "спортивный зал", "дворец", "зоопарк", "аквариум", "ферма",
        "школа", "университет", "колледж", "гимназия", "детский сад", "завод", "фабрика", "офис", "строительство", "порт",
        "платформа", "станция", "автобус", "поезд", "самолет", "машина", "велосипед", "скейтборд", "самокат", "ролики",
        "дорога", "мост", "платформа", "подземка", "заправка", "гараж", "парковка", "трасса", "пункт", "дорожный знак",
        "педаль", "руль", "ключ", "замок", "кнопка", "провод", "зарядное устройство", "пульт", "кабель", "разъем",
        "сортир", "душ", "ванна", "раковина", "кран", "тумбочка", "зеркало", "полотенце", "тапочки", "мыло",
        "шампунь", "косметика", "зубная щетка", "зубная паста", "расческа", "парфюм", "крем", "гелевый дождик", "фен",
        "отель", "гостиница", "хостел", "кемпинг", "домик", "гостевой дом", "шале", "площадка", "бассейн", "сауна",
        "фитнес", "спа", "антибиотики", "витамины", "пластырь", "медицинский кабинет", "врач", "медсестра", "больница", "аптека",
        "консультант", "специалист", "эксперт", "менеджер", "директор", "предприниматель", "работник", "служащий", "студент", "ученик",
        "проект", "задача", "план", "стратегия", "цель", "результат", "анализ", "отчет", "исследование", "тест",
        "проектор", "экран", "печатная машинка", "копир", "факс", "бумага", "чернила", "маркер", "ручка", "карандаш",
        "степлер", "скрепки", "клей", "коробка", "папка", "папка для документов", "книга", "тетрадь", "дневник", "алфавит",
        "словарь", "грамматика", "история", "физика", "математика", "химия", "биология", "география", "экономика", "политика",
        "искусство", "музыка", "художественный фильм", "драма", "комедия", "мюзикл", "документальный фильм", "аниме", "сериал", "ток-шоу",
        "интервью", "дебаты", "выставка", "конференция", "фестиваль", "конкурс", "премия", "церемония", "вечеринка", "банкет",
        "завтрак", "обед", "ужин", "перекус", "праздник", "юбилей", "день рождения", "свадьба", "крещение", "отпуск",
        "путешествие", "экскурсия", "поход", "пикник", "отдых", "плавание", "занятие спортом", "тренировка", "зарядка", "йога",
        "пилатес", "техник", "системный администратор", "программист", "дизайнер", "технолог", "инженер", "архитектор", "конструктор", "механик",
        "бухгалтер", "экономист", "финансист", "маркетолог", "PR-менеджер", "менеджер по продажам", "специалист по кадрам", "тренер", "психолог", "социолог",
        "журналист", "редактор", "корреспондент", "фотограф", "оператор", "режиссер", "актёр", "музыкант", "сценарист", "драматург",
        "стол", "кресло", "диван", "телевизор", "холодильник", "плита", "микроволновка", "чайник", "термос", "кастрюля",
        "сковорода", "кастрюля", "плот", "палатка", "мягкая игрушка", "декор", "скульптура", "вазон", "горшок", "плед",
        "покрывало", "карниз", "занавес", "фоторамка", "подушка", "матрас", "коврик", "прачечная", "сушилка", "шкафчик",
        "гладильная доска", "сортировка", "пылесос", "тряпка", "веник", "швабра", "отрасль", "сфера", "профессия", "квалификация",
        "перспектива", "идея", "мысль", "потребность", "запрос", "рынок", "тренд", "технология", "метод", "прием",
        "производственный процесс", "резерв", "реализация", "комплекс", "механизм", "принцип", "функция", "формула", "методика", "обработка",
        "диагностика", "оценка", "критерий", "анализ", "моделирование", "прогноз", "реакция", "влияние", "воздействие", "параметр",
        "фактор", "условие", "объект", "субъект", "компонент", "продукт", "услуга", "фирма", "проект", "программа",
        "платформа", "система", "инструмент", "проектирование", "исследование", "инновация", "разработка", "тестирование", "имплементация", "внедрение",
        "отрасль", "поток", "парадигма", "структура", "эксперимент", "проведение", "управление", "стратегия", "достижение", "планирование",
        "подход", "концепция", "разработка", "анализ", "технологический процесс", "этап", "фаза", "подсистема", "механизм", "инструмент",
        "отчетность", "сведение", "показатель", "параметр", "объем", "производительность", "эффективность", "система", "метод", "инструментарий",
        "интерфейс", "алгоритм", "функция", "модуль", "пакет", "платформа", "проект", "инициатива", "контроль", "оценка",
        "поддержка", "развитие", "управление", "анализ", "исследование", "инновация", "производственный процесс", "продукт", "услуга", "технология",
        "план", "программа", "проект", "система", "инструмент", "методика", "платформа", "механизм", "интерфейс", "алгоритм",
        "модуль", "пакет", "инструмент", "ресурс", "подход", "концепция", "анализ", "технология", "инновация", "разработка", "проектирование", "прогноз",
        "производительность", "показатель", "результат", "влияние", "воздействие", "фактор", "условие", "объект", "субъект", "компонент",
        "параметр", "моделирование", "прогнозирование", "оценка", "диагностика", "анализ", "тестирование", "внедрение", "реализация", "имплементация",
        "разработка", "инновация", "инструментарий", "подход", "концепция", "методика", "технология", "платформа", "система", "интерфейс",
        "алгоритм", "функция", "механизм", "модуль", "пакет", "инструмент", "ресурс", "подход", "контроль", "оценка", "производственный процесс",
        "продукт", "услуга", "проект", "программа", "план", "анализ", "технология", "разработка", "инновация", "тестирование", "внедрение",
        "проектирование", "разработка", "реализация", "инструмент", "платформа", "модуль", "пакет", "ресурс", "подход", "концепция",
        "методика", "показатель", "результат", "влияние", "воздействие", "фактор", "условие", "объект", "субъект", "компонент"
      ];
      
    var timer;
    var teams = {};
    var settings = { time: 60, words: 5 };
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
        if (teamContent.children.length < 5) { // Limit to 5 teams
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
                    <input type="range" id="words-range" min="1" max="20" value="${settings.words}" />
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
                <div id="swipe-top" class="swipe-zone">Пропустить</div>
                <div id="swipe-area">
                    <div id="current-word">${getRandomWord()}</div>
                </div>
                <div id="swipe-bottom" class="swipe-zone">Отгадано</div>
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
        let touchstartY = 0;

        swipeArea.addEventListener('touchstart', (e) => {
            touchstartY = e.touches[0].clientY;
        });

        swipeArea.addEventListener('touchmove', (e) => {
            const touchMoveY = e.touches[0].clientY;
            const moveY = touchMoveY - touchstartY;
            swipeArea.style.transform = `translateY(${moveY}px)`;
            swipeArea.classList.add('moving');
        });

        swipeArea.addEventListener('touchend', (e) => {
            const touchendY = e.changedTouches[0].clientY;
            const swipeDistance = touchstartY - touchendY;
            swipeArea.style.transform = 'translateY(0)';
            swipeArea.classList.remove('moving');

            if (Math.abs(swipeDistance) > 50) {
                if (swipeDistance < 0) {
                    handleIncorrectAnswer();
                } else {
                    handleCorrectAnswer();
                }
            }
        });
    }

    function handleCorrectAnswer() {
        animateSwipe('up');
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

    function handleIncorrectAnswer() {
        animateSwipe('down');
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
        if (direction === 'up') {
            swipeArea.style.transform = 'translateY(-100vh)';
        } else {
            swipeArea.style.transform = 'translateY(100vh)';
        }
        setTimeout(() => {
            swipeArea.style.transition = 'none';
            swipeArea.style.transform = 'translateY(0)';
            swipeArea.offsetHeight; // Trigger reflow
            swipeArea.style.transition = 'transform 0.3s ease-in-out';
            swipeArea.classList.remove('moving');
        }, 300);
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