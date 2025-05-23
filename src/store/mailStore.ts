import { create } from 'zustand';

export interface MailItem {
  sender: string;
  email: string;
  subject: string;
  body: string;
  read: boolean;
}

interface MailState {
  selectedFolder: string;
  mailCount: number;
  pageIndex: number;
  pageSize: number;
  pageItems: MailItem[];
  selectedItem: MailItem | null;
  selectFolder: (folder: string) => void;
  nextPage: () => void;
  prevPage: () => void;
  selectItem: (item: MailItem) => void;
}

export const useMailStore = create<MailState>((set) => ({
  selectedFolder: 'Inbox',
  mailCount: 64,
  pageIndex: 0,
  pageSize: 20,
  pageItems: generateMockMails(20),
  selectedItem: null,
  selectFolder: (folder) => set({ selectedFolder: folder, pageIndex: 0, pageItems: generateMockMails(20) }),
  nextPage: () => set((state) => ({ pageIndex: state.pageIndex + 1, pageItems: generateMockMails(20) })),
  prevPage: () => set((state) => ({ pageIndex: Math.max(0, state.pageIndex - 1), pageItems: generateMockMails(20) })),
  selectItem: (item) => set({ selectedItem: item })
}));

function generateMockMails(count: number): MailItem[] {
  const senders = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown'];
  const subjects = ['Meeting Tomorrow', 'Project Update', 'Weekly Report', 'Important Notice'];
  
  return Array.from({ length: count }, (_, i) => ({
    sender: senders[i % senders.length],
    email: `${senders[i % senders.length].toLowerCase().replace(' ', '.')}@example.com`,
    subject: subjects[i % subjects.length],
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    read: false
  }));
}