// Multi-language support module
// Supports RU and EN with automatic detection

import { CONFIG } from './constants.js';


const translations = {
  ru: {
    'app.title_long': 'EcoFriend - Экологичное будущее',
    // Welcome screen
    'app.title': 'EcoFriend',
    'welcome.subtitle': 'Сканируй отходы, зарабатывай баллы\nи делай мир чище',
    'welcome.start': 'Начать',
    'welcome.have_account': 'У меня есть аккаунт',
    
    // Auth
    'auth.register': 'Регистрация',
    'auth.login': 'Вход',
    'auth.name': 'Имя',
    'auth.email': 'Email',
    'auth.email_placeholder': 'example@mail.com',
    'auth.password': 'Пароль',
    'auth.password_hint': 'Минимум 6 символов',
    'auth.password_placeholder': 'Введите пароль',
    'auth.create_account': 'Создать аккаунт',
    'auth.login_button': 'Войти',
    'auth.name_placeholder': 'Введите ваше имя',
    'auth.default_user_name': 'Пользователь',
    'auth.logout': 'Выйти',
    
    // Main screen
    'main.title': 'Главная',
    'main.level': 'Уровень',
    'main.points': 'баллов',
    'main.to_next_level': 'До следующего уровня',
    'main.scan_waste': 'Сканировать отходы',
    'main.scan_barcode': 'Сканировать по штрихкоду',
    'main.recycling_guide': 'Инструкции по переработке',
    'main.recent_activity': 'Недавняя активность',
    'main.streak_badge': 'Серия {days} дней',
    'main.no_activity': 'Пока нет активности',
    'main.scan_first': 'Отсканируйте ваш первый предмет!',
    
    // Waste types
    'waste.plastic': 'Пластик',
    'waste.plastic_emoji': '🧃 Пластик',
    'waste.paper': 'Бумага',
    'waste.paper_emoji': '📄 Бумага',
    'waste.glass': 'Стекло',
    'waste.glass_emoji': '🍾 Стекло',
    'waste.metal': 'Металл',
    'waste.metal_emoji': '🥫 Металл',
    'waste.organic': 'Органика',
    'waste.organic_emoji': '🍎 Органика',
    'waste.other': 'Другое',
    'waste.other_emoji': '🗑️ Другое',
    
    // Scanner
    'scanner.init': 'Инициализация камеры...',
    'scanner.capture': 'Сфотографировать',
    'scanner.recognizing': 'Распознавание...',
    'scanner.not_recognized': 'Предмет не распознан',
    'scanner.confirm_title': 'Распознавание верное?',
    'scanner.confirm_yes': 'Да, сохранить',
    'scanner.confirm_no': 'Нет, повторить',
    'scanner.barcode_instruction': 'Наведите камеру на штрихкод',
    'scanner.barcode_product_not_found': 'Товар не найден. Выберите тип отходов вручную.',
    'scanner.waste_type': 'Тип отходов:',
    'scanner.plastic_type': 'Тип пластика:',
    'scanner.eco_score': 'Эко-оценка:',
    'scanner.impact': 'Воздействие:',
    'scanner.recycling_tips': '♻️ Советы по переработке',
    'scanner.save_scan': 'Сохранить скан',
    'scanner.recognized': 'Распознано',
    'scanner.is_correct': 'Это правильно?',
    'scanner.select_waste_type': 'Выберите тип отходов',
    'scanner.unknown_product': 'Неизвестный продукт',
    'scanner.searching_product': 'Ищем товар в базе данных...',
    'scanner.manual_entry': 'Ввести вручную',
    'scanner.enter_barcode': 'Введите номер штрихкода',
    
    // Stats
    'stats.title': 'Статистика',
    'stats.period_7': '7 дней',
    'stats.period_30': '30 дней',
    'stats.period_all': 'Всё время',
    'stats.total_items': 'Всего предметов',
    'stats.total_weight': 'Общий вес',
    'stats.total_points': 'Всего баллов',
    'stats.by_type': 'По типам отходов',
    'stats.history': 'История сканирований',
    'stats.activity': 'Активность за период',
    'stats.no_data_period': 'Нет данных за выбранный период',
    'stats.empty': 'История пуста',
    
    // Profile
    'profile.title': 'Профиль',
    'profile.level': 'Уровень',
    'profile.points': 'Баллов',
    'profile.items': 'Предметов',
    'profile.achievements': 'Достижения',
    'profile.eco_footprint': 'Экологический след',
    'profile.co2_saved': 'Сохранено CO₂',
    'profile.trees_saved': 'Деревьев спасено',
    'profile.no_badge': 'Без значка',
    
    // Achievements
    'achievement.newbie': 'Новичок',
    'achievement.newbie_desc': 'Отсканируй первый предмет',
    'achievement.eco_hero': 'Эко-герой',
    'achievement.eco_hero_desc': 'Набери 100 баллов',
    'achievement.master': 'Мастер',
    'achievement.master_desc': 'Достигни 5 уровня',
    'achievement.streak_7': 'Неделя успеха',
    'achievement.streak_7_desc': 'Сканируй 7 дней подряд',
    'achievement.streak_30': 'Месяц успеха',
    'achievement.streak_30_desc': 'Сканируй 30 дней подряд',
    'achievement.collector_plastic': 'Коллекционер пластика',
    'achievement.collector_plastic_desc': 'Отсканируй 50 пластиковых предметов',
    'achievement.collector_paper': 'Спаситель деревьев',
    'achievement.collector_paper_desc': 'Отсканируй 50 бумажных предметов',
    'achievement.collector_glass': 'Мастер стекла',
    'achievement.collector_glass_desc': 'Отсканируй 50 стеклянных предметов',
    'achievement.eco_warrior': 'Эко-воин',
    'achievement.eco_warrior_desc': 'Достигни 10 уровня',
    'achievement.century_club': 'Клуб сотни',
    'achievement.century_club_desc': 'Отсканируй 100 предметов',
    'achievement.metal_master': 'Мастер металла',
    'achievement.metal_master_desc': 'Отсканируй 50 металлических предметов',
    'achievement.point_master': 'Мастер баллов',
    'achievement.point_master_desc': 'Заработай 500 баллов',
    'achievement.point_legend': 'Легенда баллов',
    'achievement.point_legend_desc': 'Заработай 1000 баллов',
    'achievement.early_bird': 'Ранняя пташка',
    'achievement.early_bird_desc': 'Отсканируй 10 предметов',
    'achievement.consistent': 'Постоянство',
    'achievement.consistent_desc': 'Отсканируй предметы 3 дня подряд',
    'achievement.dedicated': 'Преданность',
    'achievement.dedicated_desc': 'Достигни 3 уровня',
    'achievement.weight_champion': 'Чемпион веса',
    'achievement.weight_champion_desc': 'Переработай 5 кг отходов',
    'achievement.diversity': 'Разнообразие',
    'achievement.diversity_desc': 'Отсканируй каждый тип отходов минимум 5 раз',
    'achievement.quest_master': 'Мастер квестов',
    'achievement.quest_master_desc': 'Выполни 10 ежедневных квестов',
    'achievement.quest_legend': 'Легенда квестов',
    'achievement.quest_legend_desc': 'Выполни 50 ежедневных квестов',
    'achievement.point_titan': 'Титан баллов',
    'achievement.point_titan_desc': 'Заработай 5000 баллов',
    'achievement.diversity_master': 'Мастер разнообразия',
    'achievement.diversity_master_desc': 'Отсканируй каждый тип отходов минимум 25 раз',
    
    // Quests
    'quest.daily': 'Ежедневные квесты',
    'quest.scan_5': 'Отсканируй 5 предметов',
    'quest.scan_plastic': 'Отсканируй 3 пластиковых предмета',
    'quest.earn_50': 'Заработай 50 баллов',
    'quest.daily_desc': 'Обновляются каждый день',
    'quest.weekly': 'Еженедельные квесты',
    'quest.weekly_desc': 'Более сложные испытания с крупными наградами. Обновляются каждый понедельник.',
    'quest.scan_paper_2': 'Бумажная миссия',
    'quest.scan_paper_2_desc': 'Отсканируй 2 бумажных предмета',
    'quest.scan_glass_1': 'Стеклянный вызов',
    'quest.scan_glass_1_desc': 'Отсканируй стеклянный предмет',
    'quest.weekly_scan_30': 'Недельный марафон',
    'quest.weekly_scan_30_desc': 'Отсканируй 30 предметов за неделю',
    'quest.weekly_plastic_15': 'Пластиковый рейд',
    'quest.weekly_plastic_15_desc': 'Отсканируй 15 пластиковых предметов за неделю',
    'quest.weekly_earn_300': 'Охотник за баллами',
    'quest.weekly_earn_300_desc': 'Заработай 300 баллов за неделю',
    'quest.weekly_diversity_5': 'Мастер разнообразия (неделя)',
    'quest.weekly_diversity_5_desc': 'Отсканируй по 5 предметов каждого основного типа',
    'quest.loading': 'Квесты на сегодня загружаются...',
    'quest.weekly_loading': 'Еженедельные квесты скоро появятся...',
    'quest.completed': '✓ Выполнено',
    
    // Shop
    'shop.title': 'Магазин',
    'shop.balance': 'Баланс',
    'shop.ecocoins': 'ЭкоМонет',
    'shop.themes': 'Темы',
    'shop.avatars': 'Аватары',
    'shop.badges': 'Значки профиля',
    'shop.buy': 'Купить',
    'shop.apply': 'Применить',
    'shop.active': 'Используется',
    'shop.purchased': '✅ Тема "{name}" приобретена!',
    'shop.avatar_purchased': '✅ Аватар "{name}" приобретен!',
    'shop.badge_purchased': '✅ Значок "{name}" приобретен!',
    'shop.theme_applied': '✅ Тема применена',
    'shop.avatar_applied': '✅ Аватар применен',
    'shop.badge_applied': '✅ Значок применен',
    'shop.not_enough_coins': '❌ Недостаточно ЭкоМонет',
    'shop.default_avatar': 'По умолчанию',
    'shop.owned': 'Куплено',
    'shop.avatar_eco_hero': 'Эко-герой',
    'shop.avatar_tree': 'Дерево',
    'shop.avatar_recycle': 'Переработка',
    'shop.avatar_earth': 'Планета',
    'shop.badge_eco_hero': 'Эко-герой',
    'shop.badge_zero_waste': 'Без отходов',
    'shop.badge_planet_lover': 'Любитель планеты',
    'generic.enabled': 'включено',
    'generic.disabled': 'отключено',
    'generic.changed': 'изменен',
    
    // Leaderboard
    'leaderboard.title': 'Таблица лидеров',
    'leaderboard.friends': 'Друзья',
    'leaderboard.region': 'Регион',
    'leaderboard.global': 'Весь мир',
    'leaderboard.you': 'Вы',
    'leaderboard.loading': 'Загрузка...',
    'leaderboard.empty': 'Пока нет данных для таблицы лидеров',
    'leaderboard.empty_hint': 'Сканируйте отходы и синхронизируйте данные',
    'leaderboard.sync_now': 'Синхронизировать сейчас',
    'leaderboard.error': 'Ошибка загрузки лидерборда',
    
    // Battles
    'battle.title': 'Битвы',
    'battle.weekly': 'Еженедельная битва',
    'battle.time_left': 'Осталось времени',
    'battle.join': 'Присоединиться',
    'battle.participants': 'Участников',
    'battle.your_rank': 'Ваше место',
    'battle.your_score': 'Ваш счет',
    'battle.winner_prize': 'Награда победителю',
    'battle.joined': '✅ Вы присоединились к битве!',
    'battle.already_joined': 'Участвуете',
    
    // Settings
    'settings.title': 'Настройки',
    'settings.sync': 'Синхронизация',
    'settings.auto_sync': 'Автоматическая синхронизация',
    'settings.auto_sync_desc': 'Синхронизировать данные с облаком автоматически',
    'settings.sync_interval': 'Интервал синхронизации',
    'settings.sync_interval_desc': 'Как часто синхронизировать данные',
    'settings.interval_5': 'Каждые 5 минут',
    'settings.interval_15': 'Каждые 15 минут',
    'settings.interval_30': 'Каждые 30 минут',
    'settings.interval_60': 'Каждый час',
    'settings.sync_now': 'Синхронизировать сейчас',
    'settings.notifications': 'Уведомления',
    'settings.sound': 'Звук',
    'settings.vibration': 'Вибрация',
    'settings.confirm_scans': 'Подтверждение распознавания',
    'settings.confirm_scans_desc': 'Спрашивать подтверждение после каждого сканирования',
    'settings.language': 'Язык',
    'settings.language_label': 'Язык интерфейса / Interface Language',
    'settings.language_desc': 'Выберите язык приложения / Select app language',
    'settings.theme': 'Тема',
    'settings.clear_cache': 'Очистить кэш',
    'settings.about': 'О приложении',
    'settings.version': 'Версия',
    'settings.storage': 'Хранилище',
    'settings.pending_scans': 'Несинхронизированных сканирований',
    'settings.notifications_header': 'Уведомления',
    'settings.notifications_desc': 'Показывать уведомления о действиях',
    'settings.sound_desc': 'Звуковые эффекты при сканировании',
    'settings.vibration_desc': 'Вибрация при действиях',
    
    // Theme names
    'theme.default': 'Светлая',
    'theme.light': 'Светлая',
    'theme.dark': 'Темная',
    'theme.nature': 'Природа',
    'theme.ocean': 'Океан',
    'theme.sunset': 'Закат',
    
    // Notifications
    'notif.level_up': 'Уровень {level}! +{points} баллов!',
    'notif.points_earned': '+{points} баллов!',
    'notif.quest_complete': 'Квест завершен!',
    'notif.achievement': 'Достижение разблокировано!',
    'notif.streak': 'Серия {days} дней!',
    'notif.synced': 'Синхронизировано {count} сканирований',
    'notif.offline': 'Нет соединения (работаем офлайн)',
    'notif.online': 'Соединение восстановлено',
    'notif.fill_all_fields': 'Заполните все поля',
    'notif.password_too_short': 'Пароль должен быть минимум 6 символов',
    'notif.account_created': '✅ Аккаунт создан!',
    'notif.register_error': '❌ Ошибка регистрации: {error}',
    'notif.login_success': '✅ Вход выполнен!',
    'notif.login_error': '❌ Неверный email или пароль',
    'notif.logout_confirm': 'Вы уверены, что хотите выйти?',
    'notif.logout_confirm_pending': 'У вас {count} несинхронизированных сканирований. При выходе данные будут сохранены локально. Продолжить?',
    'notif.sync_before_logout': 'Синхронизация перед выходом...',
    'notif.logout_success': 'Вы вышли из аккаунта',
    'notif.logout_error': 'Ошибка при выходе',
    'notif.camera_fail': '❌ Не удалось запустить камеру',
    'notif.barcode_scanner_unavailable': '❌ Сканер недоступен. Используйте HTTPS или localhost.',
    'notif.loading_scanner': 'Загрузка сканера...',
    'notif.barcode_container_not_found': 'Ошибка: не найден контейнер для камеры.',
    'notif.barcode_scanner_fail': '❌ Не удалось запустить сканер. Выберите тип отходов вручную.',
    'notif.unknown_waste_type': '❌ Неизвестный тип отхода',
    'notif.try_again': 'Попробуйте еще раз',
    'notif.unknown_waste_to_save': 'Неизвестный тип отхода для сохранения.',
    'notif.no_data_to_save': 'Нет данных для сохранения.',
    'notif.gemini_permission_error': 'Сервис распознавания временно недоступен. Пожалуйста, выберите тип отходов вручную.',
    'notif.recognition_error': '❌ Ошибка распознавания',
    'notif.sync_status': '📊 Не синхронизировано: {count}\n⏰ Последняя синхронизация: {lastSync}',
    'notif.sync_now_confirm': 'Синхронизировать {count} сканирований сейчас?',
    'notif.sync_never': 'Никогда',
    'notif.auth_error_relogin': '⚠️ Ошибка аутентификации. Необходимо войти снова.',
    'notif.sync_in_progress': '🔄 Синхронизация {count} сканирований...',
    'notif.sync_error': '⚠️ Ошибка синхронизации',
    'notif.sync_complete_no_scans': '✅ Синхронизация завершена!',
    
    // Eco facts
    'fact.plastic_ocean': 'Каждый год в океан попадает 8 млн тонн пластика',
    'fact.plastic_decompose': 'Пластиковая бутылка разлагается 450 лет',
    'fact.paper_trees': '1 тонна бумаги = 17 деревьев',
    'fact.recycle_saves': 'Переработка экономит 95% энергии',
    'fact.glass_forever': 'Стекло можно перерабатывать бесконечно',
    'fact.did_you_know': 'Знали ли вы?',
    'fact.got_it': 'Понятно',

    // Footprint
    'footprint.title': 'Ваш вклад в защиту планеты',
    'footprint.co2_saved': 'CO₂ не попало в атмосферу',
    'footprint.trees_saved': 'Деревьев спасено',
    'footprint.water_saved': 'Воды сэкономлено',
    'footprint.energy_saved': 'Энергии сэкономлено',
    'footprint.share': 'Поделиться достижениями',
    'footprint.share_text': '🌍 Мой вклад в EcoFriend:\n✅ {items} предметов переработано\n☁️ {co2} кг CO₂ сохранено\n🌳 {trees} деревьев спасено\n\nПрисоединяйтесь!',
    'footprint.share_title': 'EcoFriend - Мои достижения',
    'footprint.shared': '✅ Поделились!',
    'footprint.copied': '✅ Скопировано в буфер обмена',
    'footprint.loading_error': 'Ошибка загрузки данных',
    'footprint.reload_button': 'Попробовать снова',
    
    // Time
    'time.just_now': 'только что',
    'time.min_ago': '{n} мин назад',
    'time.hours_ago': '{n} ч назад',
    'time.days_ago': '{n} дн назад',
    
    // Navigation
    'nav.home': 'Главная',
    'nav.stats': 'Статистика',
    'nav.profile': 'Профиль',
    'nav.shop': 'Магазин',
    'nav.leaderboard': 'Лидеры',
    'nav.quests': 'Квесты',
    'nav.battles': 'Битвы',

    // Generic
    'generic.error_loading_app': 'Ошибка загрузки',
    'generic.error_loading_app_desc': 'Не удалось загрузить приложение. Попробуйте обновить страницу.',
    'generic.reload': 'Обновить',
    'generic.user': 'Пользователь',
    'generic.items': 'предметов',
    'generic.level_abbr': 'Уровень',
    'generic.points_abbr': 'б',
    'generic.kg': 'кг',
    'generic.unavailable': 'Недоступно',
    'generic.clear_cache_confirm': 'Очистить кэш? Несинхронизированные данные будут потеряны.',
    'generic.cache_cleared': '✅ Кэш очищен',

    // Recycling Guide
    'guide.plastic.title': 'Пластик',
    'guide.plastic.desc': 'Пластик - один из самых распространенных видов отходов. Важно правильно его сортировать.',
    'guide.how_to_recycle': 'Как перерабатывать:',
    'guide.plastic.tip1': 'Промойте упаковку перед сдачей',
    'guide.plastic.tip2': 'Удалите этикетки и крышки',
    'guide.plastic.tip3': 'Сдавите бутылки для экономии места',
    'guide.plastic.tip4': 'Проверьте маркировку (1-7) на упаковке',
    'guide.plastic.types_title': 'Типы пластика:',
    'guide.plastic.type1': '<strong>PET (1)</strong> - Полиэтилентерефталат. Бутылки для напитков. Хорошо перерабатывается.',
    'guide.plastic.type2': '<strong>HDPE (2)</strong> - Полиэтилен высокой плотности. Канистры, бутылки для молока. Легко перерабатывается.',
    'guide.plastic.type3': '<strong>PVC (3)</strong> - Поливинилхлорид. Трубы, окна. Перерабатывается редко.',
    'guide.plastic.type4': '<strong>LDPE (4)</strong> - Полиэтилен низкой плотности. Пакеты, пленка. Перерабатывается ограниченно.',
    'guide.plastic.type5': '<strong>PP (5)</strong> - Полипропилен. Контейнеры, крышки. Хорошо перерабатывается.',
    'guide.plastic.type6': '<strong>PS (6)</strong> - Полистирол. Пенопласт, одноразовая посуда. Перерабатывается редко.',
    'guide.plastic.type7': '<strong>Other (7)</strong> - Другие виды. Проверьте местные правила.',
    'guide.paper.title': 'Бумага и картон',
    'guide.paper.desc': 'Бумага хорошо перерабатывается, но важно правильно подготовить ее к сдаче.',
    'guide.paper.tip1': 'Убедитесь, что бумага сухая',
    'guide.paper.tip2': 'Удалите скотч и пластиковые элементы',
    'guide.paper.tip3': 'Не сдавайте загрязненную бумагу (жир, краска)',
    'guide.paper.tip4': 'Сдавите картонные коробки',
    'guide.glass.title': 'Стекло',
    'guide.glass.desc': 'Стекло можно перерабатывать бесконечно без потери качества.',
    'guide.glass.tip1': 'Промойте бутылки и банки',
    'guide.glass.tip2': 'Удалите крышки и пробки',
    'guide.glass.tip3': 'Не разбивайте стекло - это усложняет переработку',
    'guide.glass.tip4': 'Разделяйте по цветам (бесцветное, зеленое, коричневое)',
    'guide.metal.title': 'Металл',
    'guide.metal.desc': 'Металл полностью перерабатывается и может использоваться многократно.',
    'guide.metal.tip1': 'Промойте банки перед сдачей',
    'guide.metal.tip2': 'Удалите этикетки',
    'guide.metal.tip3': 'Разделяйте алюминий и сталь',
    'guide.metal.tip4': 'Сдавите банки для экономии места',
    'guide.organic.title': 'Органика'
  },
  
  en: {
    'app.title_long': 'EcoFriend - A Greener Future',
    // Welcome screen
    'app.title': 'EcoFriend',
    'welcome.subtitle': 'Scan waste, earn points\nand make the world cleaner',
    'welcome.start': 'Get Started',
    'welcome.have_account': 'I have an account',
    
    // Auth
    'auth.register': 'Sign Up',
    'auth.login': 'Log In',
    'auth.name': 'Name',
    'auth.email': 'Email',
    'auth.email_placeholder': 'example@mail.com',
    'auth.password': 'Password',
    'auth.password_hint': 'At least 6 characters',
    'auth.password_placeholder': 'Enter your password',
    'auth.create_account': 'Create Account',
    'auth.login_button': 'Log In',
    'auth.name_placeholder': 'Enter your name',
    'auth.default_user_name': 'User',
    'auth.logout': 'Log Out',
    
    // Main screen
    'main.title': 'Home',
    'main.level': 'Level',
    'main.points': 'points',
    'main.to_next_level': 'To next level',
    'main.scan_waste': 'Scan Waste',
    'main.scan_barcode': 'Scan by Barcode',
    'main.recycling_guide': 'Recycling Guide',
    'main.recent_activity': 'Recent Activity',
    'main.streak_badge': '{days} day streak',
    'main.no_activity': 'No activity yet',
    'main.scan_first': 'Scan your first item!',
    
    // Waste types
    'waste.plastic': 'Plastic',
    'waste.plastic_emoji': '🧃 Plastic',
    'waste.paper': 'Paper',
    'waste.paper_emoji': '📄 Paper',
    'waste.glass': 'Glass',
    'waste.glass_emoji': '🍾 Glass',
    'waste.metal': 'Metal',
    'waste.metal_emoji': '🥫 Metal',
    'waste.organic': 'Organic',
    'waste.organic_emoji': '🍎 Organic',
    'waste.other': 'Other',
    'waste.other_emoji': '🗑️ Other',
    
    // Scanner
    'scanner.init': 'Initializing camera...',
    'scanner.capture': 'Take Photo',
    'scanner.recognizing': 'Recognizing...',
    'scanner.not_recognized': 'Item not recognized',
    'scanner.confirm_title': 'Is this correct?',
    'scanner.confirm_yes': 'Yes, save',
    'scanner.confirm_no': 'No, retry',
    'scanner.barcode_instruction': 'Point camera at the barcode',
    'scanner.barcode_product_not_found': 'Product not found. Please select waste type manually.',
    'scanner.waste_type': 'Waste Type:',
    'scanner.plastic_type': 'Plastic Type:',
    'scanner.eco_score': 'Eco-Score:',
    'scanner.impact': 'Impact:',
    'scanner.recycling_tips': '♻️ Recycling Tips',
    'scanner.save_scan': 'Save Scan',
    'scanner.recognized': 'Recognized',
    'scanner.is_correct': 'Is this correct?',
    'scanner.select_waste_type': 'Select Waste Type',
    'scanner.unknown_product': 'Unknown Product',
    'scanner.searching_product': 'Searching product in database...',
    'scanner.manual_entry': 'Manual Entry',
    'scanner.enter_barcode': 'Enter barcode number',
    
    // Stats
    'stats.title': 'Statistics',
    'stats.period_7': '7 days',
    'stats.period_30': '30 days',
    'stats.period_all': 'All time',
    'stats.total_items': 'Total items',
    'stats.total_weight': 'Total weight',
    'stats.total_points': 'Total points',
    'stats.by_type': 'By waste type',
    'stats.history': 'Scan history',
    'stats.activity': 'Activity for period',
    'stats.no_data_period': 'No data for the selected period',
    'stats.empty': 'History is empty',
    
    // Profile
    'profile.title': 'Profile',
    'profile.level': 'Level',
    'profile.points': 'Points',
    'profile.items': 'Items',
    'profile.achievements': 'Achievements',
    'profile.eco_footprint': 'Eco Footprint',
    'profile.co2_saved': 'CO₂ Saved',
    'profile.trees_saved': 'Trees Saved',
    'profile.no_badge': 'No Badge',
    
    // Achievements
    'achievement.newbie': 'Newbie',
    'achievement.newbie_desc': 'Scan your first item',
    'achievement.eco_hero': 'Eco Hero',
    'achievement.eco_hero_desc': 'Earn 100 points',
    'achievement.master': 'Master',
    'achievement.master_desc': 'Reach level 5',
    'achievement.streak_7': 'Week Streak',
    'achievement.streak_7_desc': 'Scan for 7 days in a row',
    'achievement.streak_30': 'Month Streak',
    'achievement.streak_30_desc': 'Scan for 30 days in a row',
    'achievement.collector_plastic': 'Plastic Collector',
    'achievement.collector_plastic_desc': 'Scan 50 plastic items',
    'achievement.collector_paper': 'Tree Saver',
    'achievement.collector_paper_desc': 'Scan 50 paper items',
    'achievement.collector_glass': 'Glass Master',
    'achievement.collector_glass_desc': 'Scan 50 glass items',
    'achievement.eco_warrior': 'Eco-Warrior',
    'achievement.eco_warrior_desc': 'Reach level 10',
    'achievement.century_club': 'Century Club',
    'achievement.century_club_desc': 'Scan 100 items',
    'achievement.metal_master': 'Metal Master',
    'achievement.metal_master_desc': 'Scan 50 metal items',
    'achievement.point_master': 'Point Master',
    'achievement.point_master_desc': 'Earn 500 points',
    'achievement.point_legend': 'Point Legend',
    'achievement.point_legend_desc': 'Earn 1000 points',
    'achievement.early_bird': 'Early Bird',
    'achievement.early_bird_desc': 'Scan 10 items',
    'achievement.consistent': 'Consistent',
    'achievement.consistent_desc': 'Scan items 3 days in a row',
    'achievement.dedicated': 'Dedicated',
    'achievement.dedicated_desc': 'Reach level 3',
    'achievement.weight_champion': 'Weight Champion',
    'achievement.weight_champion_desc': 'Recycle 5 kg of waste',
    'achievement.diversity': 'Diversity',
    'achievement.diversity_desc': 'Scan each waste type at least 5 times',
    'achievement.quest_master': 'Quest Master',
    'achievement.quest_master_desc': 'Complete 10 daily quests',
    'achievement.quest_legend': 'Quest Legend',
    'achievement.quest_legend_desc': 'Complete 50 daily quests',
    'achievement.point_titan': 'Point Titan',
    'achievement.point_titan_desc': 'Earn 5000 points',
    'achievement.diversity_master': 'Diversity Master',
    'achievement.diversity_master_desc': 'Scan each waste type at least 25 times',
    
    // Quests
    'quest.daily': 'Daily Quests',
    'quest.scan_5': 'Scan 5 items',
    'quest.scan_plastic': 'Scan 3 plastic items',
    'quest.earn_50': 'Earn 50 points',
    'quest.daily_desc': 'Refreshes every day',
    'quest.weekly': 'Weekly Quests',
    'quest.weekly_desc': 'Harder challenges with bigger rewards. Refreshes every Monday.',
    'quest.scan_paper_2': 'Paper Mission',
    'quest.scan_paper_2_desc': 'Scan 2 paper items',
    'quest.scan_glass_1': 'Glass Challenge',
    'quest.scan_glass_1_desc': 'Scan a glass item',
    'quest.weekly_scan_30': 'Weekly Marathon',
    'quest.weekly_scan_30_desc': 'Scan 30 items in a week',
    'quest.weekly_plastic_15': 'Plastic Raid',
    'quest.weekly_plastic_15_desc': 'Scan 15 plastic items in a week',
    'quest.weekly_earn_300': 'Point Hunter',
    'quest.weekly_earn_300_desc': 'Earn 300 points in a week',
    'quest.weekly_diversity_5': 'Diversity Master (Weekly)',
    'quest.weekly_diversity_5_desc': 'Scan 5 items of each main type',
    'quest.loading': 'Loading today\'s quests...',
    'quest.weekly_loading': 'Weekly quests are coming soon...',
    'quest.completed': '✓ Completed',
    
    // Shop
    'shop.title': 'Shop',
    'shop.balance': 'Balance',
    'shop.ecocoins': 'EcoCoins',
    'shop.themes': 'Themes',
    'shop.avatars': 'Avatars',
    'shop.badges': 'Profile Badges',
    'shop.buy': 'Buy',
    'shop.apply': 'Apply',
    'shop.active': 'Active',
    'shop.purchased': '✅ Theme "{name}" purchased!',
    'shop.avatar_purchased': '✅ Avatar "{name}" purchased!',
    'shop.badge_purchased': '✅ Badge "{name}" purchased!',
    'shop.theme_applied': '✅ Theme applied',
    'shop.avatar_applied': '✅ Avatar applied',
    'shop.badge_applied': '✅ Badge applied',
    'shop.not_enough_coins': '❌ Not enough EcoCoins',
    'shop.default_avatar': 'Default',
    'shop.owned': 'Owned',
    'shop.avatar_eco_hero': 'Eco Hero',
    'shop.avatar_tree': 'Tree',
    'shop.avatar_recycle': 'Recycle',
    'shop.avatar_earth': 'Planet',
    'shop.badge_eco_hero': 'Eco Hero',
    'shop.badge_zero_waste': 'Zero Waste',
    'shop.badge_planet_lover': 'Planet Lover',
    'generic.enabled': 'enabled',
    'generic.disabled': 'disabled',
    'generic.changed': 'changed',
    
    // Leaderboard
    'leaderboard.title': 'Leaderboard',
    'leaderboard.friends': 'Friends',
    'leaderboard.region': 'Region',
    'leaderboard.global': 'Global',
    'leaderboard.you': 'You',
    'leaderboard.loading': 'Loading...',
    'leaderboard.empty': 'No data for the leaderboard yet',
    'leaderboard.empty_hint': 'Scan waste and sync your data',
    'leaderboard.sync_now': 'Sync Now',
    'leaderboard.error': 'Error loading leaderboard',
    
    // Battles
    'battle.title': 'Battles',
    'battle.weekly': 'Weekly Battle',
    'battle.time_left': 'Time Left',
    'battle.join': 'Join',
    'battle.participants': 'Participants',
    'battle.your_rank': 'Your Rank',
    'battle.your_score': 'Your Score',
    'battle.winner_prize': 'Winner\'s Prize',
    'battle.joined': '✅ You have joined the battle!',
    'battle.already_joined': 'Joined',
    
    // Settings
    'settings.title': 'Settings',
    'settings.sync': 'Synchronization',
    'settings.auto_sync': 'Auto Sync',
    'settings.auto_sync_desc': 'Automatically sync data to cloud',
    'settings.sync_interval': 'Sync Interval',
    'settings.sync_interval_desc': 'How often to sync data',
    'settings.interval_5': 'Every 5 minutes',
    'settings.interval_15': 'Every 15 minutes',
    'settings.interval_30': 'Every 30 minutes',
    'settings.interval_60': 'Every hour',
    'settings.sync_now': 'Sync Now',
    'settings.notifications': 'Notifications',
    'settings.sound': 'Sound',
    'settings.vibration': 'Vibration',
    'settings.confirm_scans': 'Confirm Recognition',
    'settings.confirm_scans_desc': 'Ask confirmation after each scan',
    'settings.language': 'Language',
    'settings.language_label': 'Interface Language',
    'settings.language_desc': 'Select app language',
    'settings.theme': 'Theme',
    'settings.clear_cache': 'Clear Cache',
    'settings.about': 'About',
    'settings.version': 'Version',
    'settings.storage': 'Storage',
    'settings.pending_scans': 'Pending scans',
    'settings.notifications_header': 'Notifications',
    'settings.notifications_desc': 'Show notifications for actions',
    'settings.sound_desc': 'Sound effects on scan',
    'settings.vibration_desc': 'Vibrate on actions',
    
    // Theme names
    'theme.default': 'Light',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.nature': 'Nature',
    'theme.ocean': 'Ocean',
    'theme.sunset': 'Sunset',
    
    // Notifications
    'notif.level_up': 'Level {level}! +{points} points!',
    'notif.points_earned': '+{points} points!',
    'notif.quest_complete': 'Quest completed!',
    'notif.achievement': 'Achievement unlocked!',
    'notif.streak': '{days} day streak!',
    'notif.synced': 'Synced {count} scans',
    'notif.offline': 'No connection (working offline)',
    'notif.online': 'Connection restored',
    'notif.fill_all_fields': 'Please fill all fields',
    'notif.password_too_short': 'Password must be at least 6 characters',
    'notif.account_created': '✅ Account created!',
    'notif.register_error': '❌ Registration error: {error}',
    'notif.login_success': '✅ Login successful!',
    'notif.login_error': '❌ Invalid email or password',
    'notif.logout_confirm': 'Are you sure you want to log out?',
    'notif.logout_confirm_pending': 'You have {count} unsynced scans. Data will be saved locally. Continue?',
    'notif.sync_before_logout': 'Syncing before logout...',
    'notif.logout_success': 'You have been logged out',
    'notif.logout_error': 'Error during logout',
    'notif.camera_fail': '❌ Failed to start camera',
    'notif.barcode_scanner_unavailable': '❌ Scanner is unavailable. Use HTTPS or localhost.',
    'notif.loading_scanner': 'Loading scanner...',
    'notif.barcode_container_not_found': 'Error: Camera container not found.',
    'notif.barcode_scanner_fail': '❌ Failed to start scanner. Please select waste type manually.',
    'notif.unknown_waste_type': '❌ Unknown waste type',
    'notif.try_again': 'Please try again',
    'notif.unknown_waste_to_save': 'Unknown waste type to save.',
    'notif.no_data_to_save': 'No data to save.',
    'notif.gemini_permission_error': 'Recognition service is temporarily unavailable. Please select the waste type manually.',
    'notif.recognition_error': '❌ Recognition error',
    'notif.sync_status': '📊 Pending sync: {count}\n⏰ Last sync: {lastSync}',
    'notif.sync_now_confirm': 'Sync {count} scans now?',
    'notif.sync_never': 'Never',
    'notif.auth_error_relogin': '⚠️ Authentication error. Please log in again.',
    'notif.sync_in_progress': '🔄 Syncing {count} scans...',
    'notif.sync_error': '⚠️ Sync error',
    'notif.sync_complete_no_scans': '✅ Sync complete!',
    
    // Eco facts
    'fact.plastic_ocean': '8 million tons of plastic enter the ocean each year',
    'fact.plastic_decompose': 'Plastic bottles take 450 years to decompose',
    'fact.paper_trees': '1 ton of paper = 17 trees',
    'fact.recycle_saves': 'Recycling saves 95% of energy',
    'fact.glass_forever': 'Glass can be recycled infinitely',
    'fact.did_you_know': 'Did you know?',
    'fact.got_it': 'Got it',

    // Footprint
    'footprint.title': 'Your Contribution to the Planet',
    'footprint.co2_saved': 'CO₂ prevented from atmosphere',
    'footprint.trees_saved': 'Trees saved',
    'footprint.water_saved': 'Water saved',
    'footprint.energy_saved': 'Energy saved',
    'footprint.share': 'Share Achievements',
    'footprint.share_text': '🌍 My EcoFriend contribution:\n✅ {items} items recycled\n☁️ {co2} kg CO₂ saved\n🌳 {trees} trees saved\n\nJoin me!',
    'footprint.share_title': 'EcoFriend - My Achievements',
    'footprint.shared': '✅ Shared!',
    'footprint.copied': '✅ Copied to clipboard',
    'footprint.loading_error': 'Error loading data',
    'footprint.reload_button': 'Try again',
    
    // Time
    'time.just_now': 'just now',
    'time.min_ago': '{n} min ago',
    'time.hours_ago': '{n}h ago',
    'time.days_ago': '{n}d ago',
    
    // Navigation
    'nav.home': 'Home',
    'nav.stats': 'Stats',
    'nav.profile': 'Profile',
    'nav.shop': 'Shop',
    'nav.leaderboard': 'Leaders',
    'nav.quests': 'Quests',
    'nav.battles': 'Battles',

    // Generic
    'generic.error_loading_app': 'Application Error',
    'generic.error_loading_app_desc': 'Failed to load the application. Please try refreshing the page.',
    'generic.reload': 'Reload',
    'generic.user': 'User',
    'generic.items': 'items',
    'generic.level_abbr': 'Level',
    'generic.points_abbr': 'pts',
    'generic.kg': 'kg',
    'generic.unavailable': 'Unavailable',
    'generic.clear_cache_confirm': 'Clear cache? Unsynced data will be lost.',
    'generic.cache_cleared': '✅ Cache cleared',

    // Recycling Guide
    'guide.plastic.title': 'Plastic',
    'guide.plastic.desc': 'Plastic is one of the most common types of waste. It is important to sort it correctly.',
    'guide.how_to_recycle': 'How to recycle:',
    'guide.plastic.tip1': 'Rinse packaging before disposal',
    'guide.plastic.tip2': 'Remove labels and caps',
    'guide.plastic.tip3': 'Crush bottles to save space',
    'guide.plastic.tip4': 'Check the marking (1-7) on the packaging',
    'guide.plastic.types_title': 'Types of plastic:',
    'guide.plastic.type1': '<strong>PET (1)</strong> - Polyethylene terephthalate. Beverage bottles. Highly recyclable.',
    'guide.plastic.type2': '<strong>HDPE (2)</strong> - High-density polyethylene. Canisters, milk bottles. Easily recyclable.',
    'guide.plastic.type3': '<strong>PVC (3)</strong> - Polyvinyl chloride. Pipes, windows. Rarely recycled.',
    'guide.plastic.type4': '<strong>LDPE (4)</strong> - Low-density polyethylene. Bags, film. Limited recyclability.',
    'guide.plastic.type5': '<strong>PP (5)</strong> - Polypropylene. Containers, lids. Highly recyclable.',
    'guide.plastic.type6': '<strong>PS (6)</strong> - Polystyrene. Styrofoam, disposable tableware. Rarely recycled.',
    'guide.plastic.type7': '<strong>Other (7)</strong> - Other types. Check local rules.',
    'guide.paper.title': 'Paper and Cardboard',
    'guide.paper.desc': 'Paper is highly recyclable, but it is important to prepare it correctly.',
    'guide.paper.tip1': 'Make sure the paper is dry',
    'guide.paper.tip2': 'Remove tape and plastic elements',
    'guide.paper.tip3': 'Do not turn in contaminated paper (grease, paint)',
    'guide.paper.tip4': 'Flatten cardboard boxes',
    'guide.glass.title': 'Glass',
    'guide.glass.desc': 'Glass can be recycled infinitely without loss of quality.',
    'guide.glass.tip1': 'Rinse bottles and jars',
    'guide.glass.tip2': 'Remove lids and corks',
    'guide.glass.tip3': 'Do not break the glass - it complicates recycling',
    'guide.glass.tip4': 'Separate by color (clear, green, brown)',
    'guide.metal.title': 'Metal',
    'guide.metal.desc': 'Metal is fully recyclable and can be reused many times.',
    'guide.metal.tip1': 'Rinse cans before disposal',
    'guide.metal.tip2': 'Remove labels',
    'guide.metal.tip3': 'Separate aluminum and steel',
    'guide.metal.tip4': 'Crush cans to save space',
    'guide.organic.title': 'Organics'
  }
};

class LanguageManager {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.translations = translations;
  }

  detectLanguage() {
    // Check saved preference
    const saved = localStorage.getItem('language');
    if (saved && translations[saved]) {
      return saved;
    }

    // Detect from browser
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (browserLang.startsWith('ru')) {
      return 'ru';
    } else if (browserLang.startsWith('en')) {
      return 'en';
    }

    // Default to English
    return 'en';
  }

  setLanguage(lang) {
    if (!translations[lang]) {
      console.error('Language not supported:', lang);
      return;
    }

    this.currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Trigger update event
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }

  t(key, params = {}) {
    let text = (translations[this.currentLang] && translations[this.currentLang][key])
      || (translations['en'] && translations['en'][key])
      || key;

    // Handle HTML content for guide
    if (key.startsWith('guide.plastic.type')) {
      // For keys that contain HTML, we don't escape it.
      // A more robust solution would use a library that handles this.
      // For now, we trust our translation strings.
      return text;
    }
    
    // Replace parameters
    Object.keys(params).forEach(param => {
      text = text.replace(`{${param}}`, params[param]);
    });
    
    return text;
  }

  // Special method for HTML content to avoid escaping
  th(key) {
    const text = (this.translations[this.currentLang] && this.translations[this.currentLang][key])
      || (this.translations['en'] && this.translations['en'][key])
      || key;
    return text;
  }

  getLanguage() {
    return this.currentLang;
  }

  getSupportedLanguages() {
    return Object.keys(translations);
  }
}

// Create and export singleton
export const lang = new LanguageManager();
export default lang;


// Add a function to update the guide content dynamically
function updateRecyclingGuide() {
  document.querySelectorAll('.recycling-category').forEach(category => {
    const type = category.dataset.type;
    category.querySelector('h3').textContent = lang.t(`guide.${type}.title`);
    category.querySelector('.category-description').textContent = lang.t(`guide.${type}.desc`);
    category.querySelector('.recycling-tips h4').textContent = lang.t('guide.how_to_recycle');
    const tips = category.querySelectorAll('.recycling-tips li');
    tips.forEach((tip, index) => {
      tip.textContent = lang.t(`guide.${type}.tip${index + 1}`);
    });
  });
}

// Listen for language changes to update the guide
window.addEventListener('languagechange', updateRecyclingGuide);
