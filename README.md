# NSBM-Event-Planning-and-Scheduling-System-
University first year Final Project

Main Idea
Develop a web application that allows university clubs and students to organise, manage, and participate in
university events. The system should simplify event planning, scheduling, registrations, and event management.
Expected Features – Admin
• Login
• Create, edit, and delete events
• Manage event categories
• View event registrations
• Manage announcements
• Generate participant lists
Expected Features – Student / User
• Register and login
• Browse upcoming events
• Search events by category
• Register for events
• View personal event schedule


#Add this to the register.html file form to make admin accs
<!-- Role Selection -->
                <div class="mb-3">
                    <label for="role" class="form-label fw-semibold">Register As</label>
                    <div class="input-group">
                        <span class="input-group-text bg-light"><i class="bi bi-person-badge text-muted"></i></span>
                        <select name="role" id="role" class="form-select" required>
                            <option value="student" <?php echo $role === 'student' ? 'selected' : ''; ?>>Student</option>
                            <option value="admin" <?php echo $role === 'admin' ? 'selected' : ''; ?>>Administrator / Faculty</option>
                        </select>
                    </div>
                    <div class="form-text">Choose Student to browse/register for events, or Administrator to manage events.</div>
                </div>