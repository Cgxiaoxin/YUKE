CREATE DATABASE IF NOT EXISTS yuke_pilates;

USE yuke_pilates;

-- 用户表
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `openid` VARCHAR(255) UNIQUE NOT NULL,
  `nickname` VARCHAR(255),
  `avatar_url` VARCHAR(255),
  `phone_number` VARCHAR(50),
  `balance` DECIMAL(10, 2) DEFAULT 0.00,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 教练表
CREATE TABLE IF NOT EXISTS `coaches` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `avatar_url` VARCHAR(255),
  `price_per_hour` DECIMAL(10, 2),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 课程表
CREATE TABLE IF NOT EXISTS `courses` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `type` ENUM('private', 'group', 'class'),
  `level` INT,
  `duration` INT, -- in minutes
  `default_price` DECIMAL(10, 2),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 排课表
CREATE TABLE IF NOT EXISTS `schedules` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `course_id` INT,
  `coach_id` INT,
  `start_time` DATETIME NOT NULL,
  `end_time` DATETIME NOT NULL,
  `capacity` INT,
  `booked_count` INT DEFAULT 0,
  `version` INT DEFAULT 0, -- For optimistic locking
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (course_id) REFERENCES courses(id),
  FOREIGN KEY (coach_id) REFERENCES coaches(id)
);

-- 预约表
CREATE TABLE IF NOT EXISTS `appointments` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT,
  `schedule_id` INT,
  `status` ENUM('booked', 'cancelled', 'completed') DEFAULT 'booked',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (schedule_id) REFERENCES schedules(id)
);
