import React, { useState } from 'react';
import { PhoneIcon, RadioIcon, AlertOctagonIcon, UserIcon, PlusIcon, XIcon } from 'lucide-react';
interface Contact {
  id: string;
  name: string;
  role: string;
  phone: string;
  radio: string;
  priority: 'primary' | 'secondary' | 'emergency';
}
interface RadioChannel {
  id: string;
  name: string;
  frequency: string;
  purpose: string;
}
const CommunicationPlan: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [channels, setChannels] = useState<RadioChannel[]>([]);
  const addContact = () => {
    const newContact: Contact = {
      id: String(contacts.length + 1),
      name: '',
      role: '',
      phone: '',
      radio: '',
      priority: 'primary'
    };
    setContacts([...contacts, newContact]);
  };
  const addChannel = () => {
    const newChannel: RadioChannel = {
      id: String(channels.length + 1),
      name: '',
      frequency: '',
      purpose: ''
    };
    setChannels([...channels, newChannel]);
  };
  const updateContact = (id: string, updates: Partial<Contact>) => {
    setContacts(contacts.map(contact => contact.id === id ? {
      ...contact,
      ...updates
    } : contact));
  };
  const updateChannel = (id: string, updates: Partial<RadioChannel>) => {
    setChannels(channels.map(channel => channel.id === id ? {
      ...channel,
      ...updates
    } : channel));
  };
  const removeContact = (id: string) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  const removeChannel = (id: string) => {
    setChannels(channels.filter(channel => channel.id !== id));
  };
  return <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0f172a]/50 rounded-lg p-6 border border-white/10">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-[#ff8200]/20 flex items-center justify-center">
            <RadioIcon className="h-5 w-5 text-[#ff8200]" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              Communication Plan
            </h4>
            <p className="text-sm text-gray-400">
              Set up communication protocols and contacts
            </p>
          </div>
        </div>
      </div>
      {/* Contacts Section */}
      <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <UserIcon className="w-5 h-5 text-blue-400" />
            <h6 className="text-white font-medium">Key Contacts</h6>
          </div>
          <button onClick={addContact} className="flex items-center space-x-2 px-3 py-1 rounded-lg text-[#ff8200] text-sm hover:bg-[#ff8200]/10 transition-colors">
            <PlusIcon className="w-4 h-4" />
            <span>Add Contact</span>
          </button>
        </div>
        <div className="space-y-4">
          {contacts.map(contact => <div key={contact.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-[#0f172a]/50 rounded-lg p-4 relative">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Name</label>
                <input type="text" value={contact.name} onChange={e => updateContact(contact.id, {
              name: e.target.value
            })} className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Role</label>
                <input type="text" value={contact.role} onChange={e => updateContact(contact.id, {
              role: e.target.value
            })} className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Phone
                </label>
                <input type="tel" value={contact.phone} onChange={e => updateContact(contact.id, {
              phone: e.target.value
            })} className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Radio Call Sign
                </label>
                <input type="text" value={contact.radio} onChange={e => updateContact(contact.id, {
              radio: e.target.value
            })} className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Priority
                </label>
                <select value={contact.priority} onChange={e => updateContact(contact.id, {
              priority: e.target.value as Contact['priority']
            })} className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none">
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>
              <button onClick={() => removeContact(contact.id)} className="absolute top-2 right-2 p-2 text-gray-400 hover:text-red-400 transition-colors">
                <XIcon className="w-4 h-4" />
              </button>
            </div>)}
        </div>
      </div>
      {/* Radio Channels */}
      <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <RadioIcon className="w-5 h-5 text-green-400" />
            <h6 className="text-white font-medium">Radio Channels</h6>
          </div>
          <button onClick={addChannel} className="flex items-center space-x-2 px-3 py-1 rounded-lg text-[#ff8200] text-sm hover:bg-[#ff8200]/10 transition-colors">
            <PlusIcon className="w-4 h-4" />
            <span>Add Channel</span>
          </button>
        </div>
        <div className="space-y-4">
          {channels.map(channel => <div key={channel.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#0f172a]/50 rounded-lg p-4 relative">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Channel Name
                </label>
                <input type="text" value={channel.name} onChange={e => updateChannel(channel.id, {
              name: e.target.value
            })} className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Frequency
                </label>
                <input type="text" value={channel.frequency} onChange={e => updateChannel(channel.id, {
              frequency: e.target.value
            })} className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Purpose
                </label>
                <input type="text" value={channel.purpose} onChange={e => updateChannel(channel.id, {
              purpose: e.target.value
            })} className="w-full bg-[#1e293b]/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none" />
              </div>
              <button onClick={() => removeChannel(channel.id)} className="absolute top-2 right-2 p-2 text-gray-400 hover:text-red-400 transition-colors">
                <XIcon className="w-4 h-4" />
              </button>
            </div>)}
        </div>
      </div>
      {/* Emergency Procedures */}
      <div className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-4">
          <AlertOctagonIcon className="w-5 h-5 text-red-400" />
          <h6 className="text-white font-medium">Emergency Procedures</h6>
        </div>
        <div className="space-y-4">
          <textarea className="w-full h-32 bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:ring-2 focus:ring-[#ff8200] focus:border-transparent transition-all outline-none resize-none" placeholder="Detail emergency procedures and protocols..." />
        </div>
      </div>
    </div>;
};
export default CommunicationPlan;